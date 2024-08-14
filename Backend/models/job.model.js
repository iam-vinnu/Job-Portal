import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    requirements:[{
        type:String
    }],
    salary:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId ,
        ref:'company'
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    applications:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Applications'
    }

});

export const job = mongoose.model('Job',jobSchema);