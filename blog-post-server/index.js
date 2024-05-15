const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

require("dotenv").config();
const port = process.env.PORT || 3000;


// middlewares

app.use(cors());
app.use(express.json());

// database connect

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vybo3pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    deprecationErrors: true,
  },
});

async function run() {
  try {

    // await client.connect();
    const usersDBCollection = client.db("BlogDB").collection("users");
    const userBlogCollection = client.db("BlogDB").collection("blogs");
    const userWishListCollection = client.db("BlogDB").collection("wishlists");
    const userComments = client.db("BlogDB").collection("comments");
    const testBlogs = client.db("BlogDB").collection("testBlog");
    const { ObjectId } = require("mongodb");
    async function setupTextIndex() {
      await userBlogCollection.createIndex({ title: "text" });
    }


    //   post users
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log(req.body);
      const result = await usersDBCollection.insertOne(user);
      res.send(result);
    });

    app.get("/test", async (req, res) => {
      const result = await testBlogs.find().toArray();
      res.send(result);
    });




    app.get("/blogs/:id", async (req, res) => {
      try {
        const id = req.params.id;


        console.log("Received ID:", id);


        if (!ObjectId.isValid(id)) {
          return res.status(400).send("Invalid ObjectId");
        }

        const query = {
          _id: new ObjectId(id),
        };
        const result = await userBlogCollection.findOne(query);
        if (!result) {

          return res.status(404).send("Test blog not found");
        }
        res.send(result);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });





    app.post("/blogs", async (req, res) => {
      const blog = req.body;
      console.log(req.body);
      const result = await userBlogCollection.insertOne(blog);
      res.send(result);
    });

    app.get("/blogs", async (req, res) => {
      // await setupTextIndex();
      const { category, searchText } = req.query;
      const query = {};

      if (category) {
        query.category = category;
      }

      if (searchText) {
        query.$text = { $search: searchText };
      }
      console.log(query)

      try {
        let result;
        if (searchText) {

          result = await userBlogCollection
            .find(query, { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } })
            .toArray();
        } else {

          result = await userBlogCollection.find(query).toArray();
        }
        res.send(result);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    app.get("/blogs/category/:category", async (req, res) => {
      const { category } = req.params;
      console.log("Filtering by category:", category);
      const query = { category };
      try {
        const blogs = await userBlogCollection.find(query).toArray();
        res.send(blogs);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });


    app.post("/wishlist", async (req, res) => {
      const data = req.body;
      console.log(req.body);
      const result = await userWishListCollection.insertOne(data);
      res.send(result);
    });

    app.get("/wishlist/:email", async (req, res) => {
      const userEmail = req.params.email; // Extract the email from the request URL
      const result = await userWishListCollection
        .find({ "user.email": userEmail })
        .toArray();
      res.send(result);
    });
    //   search
    app.get("/blogs", async (req, res) => {
      const { category, searchText } = req.query;
      const query = {};

      if (category) {
        query.category = category;
      }

      if (searchText) {
        query.$text = { $search: searchText };
      }

      try {
        let result;
        if (searchText) {
          // If searchText is provided, sort the results based on relevance
          result = await userBlogCollection
            .find(query, { score: { $meta: "textScore" } })
            .sort({ score: { $meta: "textScore" } })
            .toArray();
        } else {
          // If no searchText, return all blogs
          result = await userBlogCollection.find(query).toArray();
        }
        res.send(result);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });



    app.get("/posts", async (req, res) => {
      try {

        const topPosts = await userBlogCollection.aggregate([
          {
            $project: {
              title: 1,
              user: 1,
              wordCount: { $size: { $split: ["$details", " "] } }
            }
          },
          { $sort: { wordCount: -1 } },
          { $limit: 10 }
        ]).toArray();


        const formattedPosts = topPosts.map((post, index) => ({
          serialNumber: index + 1,
          title: post.title,
          owner: post.user,
          ownerProfilePicture: post.user.profilePicture
        }));


        res.send(formattedPosts);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });




    app.delete("/wishlist/:customID", async (req, res) => {
      const customId = req.params.customID;
      console.log("Deleting item with custom ID:", customId);

      const query = { customID: customId };
      const result = await userWishListCollection.deleteOne(query);
      res.send(result);
    });

    app.post("/comments", async (req, res) => {
      const data = req.body;
      console.log(req.body);
      const result = await userComments.insertOne(data);
      res.send(result);
      console.log(result);
    });
    app.put("/blogs/:id", async (req, res) => {
      const id = req.params.id;
      const filter = {
        _id: new ObjectId(id),
      };
      const options = { upsert: true };
      const updateBlog = req.body;
      console.log(req.body);
      const updatedBlog = {
        $set: {
          title: updateBlog.inputTitle,
          photoUrl: updateBlog.inputPhotoUrl,
          category: updateBlog.inputCategory,
          description: updateBlog.inputDescription,
          details: updateBlog.inputDetails,
          postedTime: updateBlog.updatedTime,
        },
      };
      const result = await userBlogCollection.updateOne(
        filter,
        updatedBlog,
        options
      );
      res.send(result);
    });


    // Function to validate ObjectId format
    function isValidObjectId(id) {
      return /^[0-9a-fA-F]{24}$/.test(id);
    }

    app.get("/comments/:id", async (req, res) => {
      try {
        const blogId = req.params.id;
        // Validate blogId before proceeding
        if (!isValidObjectId(blogId)) {
          return res.status(400).json({ error: "Invalid blog ID" });
        }

        const query = { blogId: blogId };
        const result = await userComments.find(query).toArray();
        res.json(result);
      } catch (error) {
        console.error("Error fetching comments:", error);
        res.status(500).json({ error: "Failed to fetch comments" });
      }
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Blog posting server is running");
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
