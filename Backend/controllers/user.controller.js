import {User} from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const register = async(req,res)=>{
      try {
        const {fullname , email , phonenumber , password , role} = req.body;
        if(!fullname || !email || !phonenumber || !password || !role){
            return res.status(400).json({
                messsage:"Something is missing",
                success:false
            })
        };
        const user = await User.findone({email});
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
      } catch (error) {
        
      }
}
