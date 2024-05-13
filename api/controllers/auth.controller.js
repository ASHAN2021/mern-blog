import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utills/error.js";

export const signup = async(req,res,next)=>{
    const {username , email ,password}=req.body;

    if(!username|| !email || !password || username==='' || email==='' || password===''){
        next(errorHandler(400,'All field are requrired'));
    }
    const hashedpassword = bcrypt.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedpassword,
    });

    try {
        await newUser.save();
    res.json('sign up sucessfull');
    } catch (error) {
        next(error);
    }

    
};