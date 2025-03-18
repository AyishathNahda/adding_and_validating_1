const bcrypt=require('bcrypt');
const User=require("../models/User");
const { use } = require('../routes/userRoutes');

const registerUser=async(req,res)=>{
    const {username,email,password}=req.body;

    if(!username || !email ||!password){
        return res.status(400).json({message:"All fields r required"});
    }
    try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser=new User({
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({message:"User registered successfully!"});
    }catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

module.exports={registerUser};