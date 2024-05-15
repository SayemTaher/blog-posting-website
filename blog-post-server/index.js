const express = require("express");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();

// middlewares

app.use(cors());
app.use(express.json());

// database connect

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vybo3pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict:false,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)

    

    await client.connect();
    const usersDBCollection = client.db("BlogDB").collection("users");
    const userBlogCollection = client.db("BlogDB").collection("blogs");
    const userWishListCollection = client.db("BlogDB").collection("wishlists");
    const userComments = client.db("BlogDB").collection("comments");
    const testBlogs = client.db("BlogDB").collection("testBlog");
    const { ObjectId } = require("mongodb");
    async function setupTextIndex() {
      await userBlogCollection.createIndex({ title: "text" });
    }
    await setupTextIndex();
    
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
    // app.get("/blogs/:id", async (req, res) => {
    //   try {
    //     const id = req.params.id;
    //     const query = {
    //       _id: new ObjectId(id),
    //     };
    //     const result = await userBlogCollection.findOne(query);
    //     if (!result) {
    //       // If no document found with the given ID
    //       return res.status(404).send("Test blog not found");
    //     }
    //     res.send(result);
    //   } catch (error) {
    //     console.error("Error:", error);
    //     res.status(500).send("Internal Server Error");
    //   }
    // });



    app.get("/blogs/:id", async (req, res) => {
      try {
        const id = req.params.id;

        // Log the id to see what value is being received
        console.log("Received ID:", id);

        // Validate if ID is in the correct format for ObjectId
        if (!ObjectId.isValid(id)) {
          return res.status(400).send("Invalid ObjectId");
        }

        const query = {
          _id: new ObjectId(id),
        };
        const result = await userBlogCollection.findOne(query);
        if (!result) {
          // If no document found with the given ID
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
    // category based
    app.get("/blogs/:category", async (req, res) => {
      const category = req.params.category;
      console.log(req.params.category);
      const query = { category: category };
      // Query MongoDB for blogs with the specified category
      const blogs = await userBlogCollection.find(query).toArray();
      res.send(blogs);
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
        const result = await userBlogCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });

    // top posts
    app.get("/posts", async (req, res) => {
      try {
        // Fetch top 10 posts based on word count of long description
        const topPosts = await userBlogCollection.find().toArray();

        // Sort the posts based on the word count of the long description
        topPosts.sort((a, b) => {
          // Calculate word count for a and b
          const wordCountA = a.details.split(" ").length;
          const wordCountB = b.details.split(" ").length;
          // Sort in descending order
          return wordCountB - wordCountA;
        });

        // Get the top 10 posts
        const top10Posts = topPosts.slice(0, 10);

        // Format the response data to include Serial Number
        const formattedPosts = top10Posts.map((post, index) => ({
          serialNumber: index + 1,
          title: post.title,
          owner: post.user, // Assuming "user" contains the owner's name
          ownerProfilePicture: post.user.profilePicture, // Assuming "profilePicture" is the field for the owner's profile picture
        }));

        // Send the formatted posts as response
        res.send(formattedPosts);
      } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
      }
    });

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
        const result = await userBlogCollection.find(query).toArray();
        res.send(result);
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

    await client.db("admin").command({ ping: 1 });
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
