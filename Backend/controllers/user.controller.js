import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async(req,res)=>{
      try {
        const {fullname,email,phonenumber,password,role} = req.body;

        if(!fullname || !email || !phonenumber || !password || !role){
            return res.status(400).json({
                messsage:"Something is missing",
                success:false
            });
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                messsage:'User already exist in this email ',
                success:false,
            }) 
        }
        const hashedPassword = await bcrypt.hash(password,10);

        await User.create({
            fullname , 
            email , 
            phonenumber ,    
            password:hashedPassword , 
            role
        })
        return res.status(201).json({
            messsage:'Account Created Succesfully.',
            success:true
        });
      } catch (error) {
        console.log("error in creating account");
      }
}

export const login = async(req,res)=>{
    try {
        const {email,password,role} = req.body;
        if( !email  || !password || !role){
            return res.status(400).json({
                messsage:"Something is missing",
                success:false
            })
        };
        let user = await User.findone({email});
        if(!user){
            return res.status(400).json({
                messsage:"Incorrect email or password",
                success:false,
                
            })
        };
        const isPasswordMatch = await bcrypt.compare(password , user.password);
        if(!isPasswordMatch){
             return res.status(400).json({
                messsage:"Incorrect email or password",
                success:false,
                
            })
        };
        if(role != user.role){
            return res.status(400).json({
                messsage:"Account doesn't exist with current role",
                success:false,
                
            })
        };
        const tokenData = {
            userId:user._id
        }
        const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        user ={
            _id:user._id,
             fullname:user.fullname,
             email:user.email,
             phonenumber:user.phonenumber,
             role:user.role,
             profile:user.profile
        }
        return res.status(200).cookie("token",token,{maxAge:1*24*60*60*100 , httpsOnly:true , sameSite:'strict'}).json({
            messsage:`Welcome Back ${user.fullname}`,
            user,
            success:true
        })

    } catch (error) {
        console.log('error in login');
    }
}

export const logout = async(req,res)=>{
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            messsage:'Logged Out Successfully',
            success:true
        })
    } catch (error) {
        console.log('error');
    }
}

export const updateProfile = async(req,res)=>{
    try {
        const {fullname , email , phonenumber , bio , skills} = req.body;
        const file = req.file;
        if(!fullname || !email || !phonenumber || !bio || !skills){
            return res.status(400).json({
                messsage:"Something is missing",
                success:false
            })
        };
        const skillsArray = skills.split(",");
        const userId = req.id;
        let user = await User.findById(userId);
        
        if(!user){
            return req.status(400).json({
                messsage:"User not Found"
            })
        }

        user.fullname= fullname,
        user.email = email,
        user.phoneNumber = phonenumber,
        user.profile.bio = bio,
        user.profile.skills = skillsArray



        await user.save();

        user ={
            _id:user._id,
             fullname:user.fullname,
             email:user.email,
             phonenumber:user.phonenumber,
             role:user.role,
             profile:user.profile
        }

        return req.status(200).json({
            messsage:"profile updated successfully",
            user,
            success:true
        })
    } catch (error) {
        console.log("error")
    }
}