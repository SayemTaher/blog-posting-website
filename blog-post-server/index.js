const express = require('express')

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb"); 
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000 
const app = express() 

// middlewares 

app.use(cors())
app.use(express.json())





// database connect 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vybo3pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      const usersDBCollection = client.db('BlogDB').collection('users')
      const userBlogCollection = client.db("BlogDB").collection("blogs");
      const userWishListCollection = client.db("BlogDB").collection("wishlists")
      const userComments = client.db("BlogDB").collection('comments')
    await client.connect();
    // Send a ping to confirm a successful connection
    //   post users 
      app.post('/users', async (req, res) => {
          const user = req.body 
          console.log(req.body)
          const result = await usersDBCollection.insertOne(user)
          res.send(result)
      })
       app.post("/blogs", async (req, res) => {
         const blog = req.body;
         console.log(req.body);
         const result = await userBlogCollection.insertOne(blog);
         res.send(result);
       });
      app.get('/blogs', async (req, res) => {
          const data = userBlogCollection.find()
          const result = await data.toArray()
          res.send(result)

      })
      app.post('/wishlist', async (req, res) => {
          const data = req.body 
          console.log(req.body)
          const result = await userWishListCollection.insertOne(data)
          res.send(result)
      })
      
      app.get("/wishlist/:email", async (req, res) => {
        const userEmail = req.params.email; // Extract the email from the request URL
        const result = await userWishListCollection
          .find({ "user.email": userEmail })
          .toArray();
          res.send(result);
      });

      app.get('/blogs/:id', async (req, res) => {
          const id = req.params.id
          const query = {
              _id : new ObjectId(id)
          }
          const result = await userBlogCollection.findOne(query)
          res.send(result)
      })
      app.get('/users', async (req, res) => {
          const data = await usersDBCollection.find().toArray()
          res.send(data)
      })
   
    //   app.delete("/wishlist/:id", async (req, res) => {
    //     const id = req.params.id;
    //     console.log("delete id with: ", req.params.id);
    //     const query = { _id: new ObjectId(id) };
    //       const result = await userWishListCollection.deleteOne(query);
    //       res.send(result)
          
    //   });
      app.delete("/wishlist/:customID", async (req, res) => {
        const customId = req.params.customID;
        console.log("Deleting item with custom ID:", customId);

        
          const query = { customID: customId };
          const result = await userWishListCollection.deleteOne(query);
          res.send(result)

         
      });

      app.post('/comments', async (req, res) => {
          const data = req.body 
          console.log(req.body)
          const result = await userComments.insertOne(data)
          res.send(result)
          console.log(result)
      })
      app.put('/blogs/:id', async (req, res) => {
          const id = req.params.id 
          const filter = {
              _id : new ObjectId(id)
          }
          const options = { upsert: true }
          const updateBlog = req.body 
          console.log(req.body)
          const updatedBlog = {
              $set: {
                  title:updateBlog.inputTitle,
                      photoUrl:updateBlog.inputPhotoUrl,
                  category:updateBlog.inputCategory,
                      description:updateBlog.inputDescription,
                  details:updateBlog.inputDetails,
                  postedTime:updateBlog.updatedTime
              }
          }
          const result = await userBlogCollection.updateOne(filter, updatedBlog, options)
          res.send(result)
      })
    const { ObjectId } = require("mongodb");


    

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


app.get('/', (req, res) => {
    res.send('Blog posting server is running')

})

app.listen(port, () => {
    console.log('Server is running on port:',port)
})