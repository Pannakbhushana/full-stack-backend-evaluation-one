const mongoose=require("mongoose");

const authSchema=mongoose.Schema({
  email:String,
  password:String,
  confirmPassword:String

})

const AuthModle=mongoose.model("auth",authSchema);

module.exports={AuthModle}
