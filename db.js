const mongoose =require("mongoose");
 require("dotenv").config();

const connection=mongoose.connect("mongodb+srv://rahul:mishra@cluster0.q84r57e.mongodb.net/fullstackrevesion?retryWrites=true&w=majority");

module.exports={connection};