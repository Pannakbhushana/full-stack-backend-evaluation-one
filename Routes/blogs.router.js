const express=require("express");
const {BlogModel}=require("../Model/blog.modle.js");

const blogRoute=express.Router()

blogRoute.post("/add",async(req,res)=>{
    const payload=req.body;
    try {
        const newuser=new BlogModel(payload);
        await newuser.save();
        res.status(200).send({msg:"new blog has been added"});
    } catch (error) {
        res.status(200).send({msg:"new blog has been added"});
    }
})

blogRoute.get("/",async(req,res)=>{
    const query=req.query;
    try {
        const data=await BlogModel.find(query);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send({msg:error.message});
    }     
})

blogRoute.delete("/delete/:userID", async(req,res)=>{
    const {userID}=req.params;
    try {
        await BlogModel.findByIdAndDelete({_id:userID});
        res.status(200).send({msg:"user has been deleted"});
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})


blogRoute.patch("/update/:userID",async(req,res)=>{
    const {userID}=req.params;
    const payload=req.body;
    try {
        res.status(200).send({msg:"user has been updated"});
        await BlogModel.findByIdAndUpdate({_id:userID},payload)
    } catch (error) {
        res.status(400).send({msg:error.message});
    }
})




module.exports={blogRoute};