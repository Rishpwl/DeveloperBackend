const express = require("express");
const mongoose = require("mongoose");

const app = express();

// MongoDB connection URL
const url = "mongodb+srv://rishabhporwal2001_db_user:ly4XdvzJmgbjEAs9@cluster0.9p0qnn4.mongodb.net/developBack";

app.get('/hello',(req,res)=>{
    res.send("hello from the server");
})
app.use((req,res)=>{
    res.send("hello hello ")
})
//app.use(express.json());

// Connect to MongoDB
mongoose.connect(url)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Test route
app.get("/", (req, res) => {
  res.send("Server is running and DB connected");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
