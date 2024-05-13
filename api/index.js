import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRouthes from "./routes/auth.route.js";
import e from "express";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("mongodb is connected");
}).catch((err)=>{
    console.log(err);
})
const app = express();

app.use(express.json());

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});

app.use('/api/user',userRoutes);
app.use('/api/auth',authRouthes);