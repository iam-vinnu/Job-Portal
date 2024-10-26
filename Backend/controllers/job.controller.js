import { Job } from "../models/job.model.js";

export const postJob = async(req,res)=>{
    try {
        const {title , description , requirments , salary , location , jobType , experience ,position, companyId} = req.body ;
        const userId = req.id;
        if(!title || !description || !requirments || !salary || !location || !jobType || !experience  || !position  || !companyId){
            return res.status(400).json({
                message:"Something is Missing",
                success:false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements : requirments.split(","),
            salary:Number(salary) ,
            location ,
            jobType ,
            experienceLevel : experience ,
            position ,
            company:companyId,
            created_by:userId,
        });
       await job.save();      
        return res.status(201).json({
            message:"New Job Created Successfully",
            job,
            success:true
        })
    } catch (error) {
        console.log("Error in creating job",error.message);
    }
}


export const getAllJobs = async (req,res) => {
        try {
            const keyword = req.query.keyword || "" ;
            const query ={
                $or:[
                    {title:{$regex:keyword,$options:"i"}},
                    {description:{$regex:keyword,$options:"i"}},
                ]
            };
            const jobs = await Job.find(query).populate({
                path:"company"
            }).sort({createdAt:-1});      
            if(!jobs){
                return res.status(404).json({
                    message:"Job Not Found",
                    success:false
                })
            };        

            return res.status(200).json({
                jobs,
                success:true
            })
        } catch (error) {
            console.log("Error in Creating job",error.message);
        }    
}

export const getJobById = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications'
        });
        if(!job){
            return res.status(400).json({
                message:"Job Not Found",
                success:false
            })
        };              
         
        return res.status(201).json({
            job,
            success:true
        })
    } catch (error) {
        console.log("Error in Fetching Job by ID",error.message);
        
    }
}


export const getAdminJobs = async (req,res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by:adminId});
        if(!jobs){
            return res.status(400).json({
                message:"Job Not Found",
                success:false
            })
        };
        return res.status(201).json({
              jobs,
              success:true
        });
    } catch (error) {
        console.log("Error in fetching job from Admin ID", error.message);
        
    }
}


