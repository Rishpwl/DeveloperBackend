const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://rishabhporwal2001_db_user:ly4XdvzJmgbjEAs9@cluster0.9p0qnn4.mongodb.net/developBackend")
}



module.exports=connectDB;