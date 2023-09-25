const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
  firstName:String,
  lastName:String,
  email:String,
 department:String,
 salary:String
})

const UserModle=mongoose.model("user",userSchema);

module.exports={UserModle}