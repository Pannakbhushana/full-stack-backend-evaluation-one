const express=require("express");
const connection=require("./db");
const authoRouts=require("./Routes/auth.router");
const {userRoute}=require("./Routes/user.router")
const cors = require('cors');

require("dotenv").config();
const app=express();
app.use(express.json());
app.use(cors())
app.use("/auth",authoRouts);
app.use("/user",userRoute);

app.listen(process.env.port, async()=>{
    try {
        await connection;
        console.log("connected to db");
    } catch (error) {
        console.log("not able to connect to db");
        console.log(error);
    }
    console.log(`server is running at port ${process.env.port}`);
})