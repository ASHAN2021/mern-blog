import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utills/error.js";
import jwt from "jsonwebtoken";

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

export const signin = async(req,res,next)=>{
    const {email,password} = req.body;
    if(!email || !password || email==='' || password===''){
        next(errorHandler(400,"All field are required"));
    }
    try {
        const validUser = await User.findOne({email});
        if(!validUser){
           return  next(errorHandler(404,'user not found'));
        }
        const validpassword = bcryptjs.compareSync(password,validUser.password);
        if(!validpassword){
            return next(errorHandler(400,'invaild password'));
        }
        const token =jwt.sign(
            {id:validUser._id},process.env.JWT_SECRET);
            const {password:pass, ...rest}= validUser._doc;
            res.status(200).cookie('access token' ,token,{
                    httpOnly:true
            }).json(rest);
    } catch (error) {
        next(error);
    }
}