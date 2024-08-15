import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    description:{
        type:String,

     },
     website:{
        type:String,
        
     },
     location:{
        type:String,
        
     },
     logo:{
        type:String,  //url 
        required:true 
     },
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
     },
},{timestamps:true});

export const Company = mongoose.model('Company',userSchema);