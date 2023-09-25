const {Router}=require("express");
const jwt=require("jsonwebtoken");
const bcrypt = require('bcrypt');
const {AuthModle}=require("../Model/auth.model.js");
const authoRouts=Router();

authoRouts.post("/signup", async(req,res)=>{
    const {email,password,confirmPassword}=req.body
   
   try {
    bcrypt.hash(password, 3, async(err, hash)=> {
        if(err){
            res.status(400).send({"msg":err.message});
        }
            const user=new AuthModle({email,password,confirmPassword});
            await user.save();
            res.status(200).send({"msg":"user SignUp successfully"});
    });
   } catch (error) {
    res.status(400).send({"msg":error.message});
   }
})


authoRouts.post("/login", async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await AuthModle.findOne({email});
        if(user){
         
            res.status(200).send({"msg":"Login Successful","token":jwt.sign({"name":user._id},"bruce")});
        }
        else{
            res.status(400).send({"msg":"user not found ! SignUp first"});
        }
        
    } catch (error) {
        res.status(400).send({"msg":error.message});
    }
})


authoRouts.get("/",async(req,res)=>{
    try {
        const users=await AuthModle.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
})


module.exports=authoRouts;