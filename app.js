const express = require("express");
const mongoose = require("mongoose");
const connectDB=require('./config/database');
const User=require('./models/user');
const app = express();

app.use(express.json());

app.post('/signup',async(req,res)=>{
   try {
    const { firstName, lastName, emailId, age, gender } = req.body;

    // Validation
    if (!firstName || !lastName || !emailId || !age || !gender) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const user = new User({
      firstName,
      lastName,
      emailId,
      age,
      gender
    });

    await user.save();   // ✅ await

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }

})


app.get('/login',async(req,res)=>{
    try{
        const findUser=await User.find();
        if(findUser){
            res.status(201).send({
                success:true,
                message:"User data found successfully",
                data:findUser
            })
        }

    }catch(err){
        console.log(err);
    }
})

connectDB().then(()=>{
    console.log("database connection successfull");
    app.listen(3000, () => {
  console.log("Server running on port 3000");
});
}).catch(err=>{
    console.err("issues in db connection")
})
// Start server

