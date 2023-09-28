const mongoose=require("mongoose");

const authenticationSchema=mongoose.Schema({
    username:String,
    avatar:String,
    email:String,
    password:String
})

const AuthenticationModel=mongoose.model("blogauth",authenticationSchema)

module.exports={AuthenticationModel};