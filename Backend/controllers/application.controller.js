import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";


export const applyJob = async (req,res) => {
    try {
         const userId = req.id; 
         const jobId= req.params.id;
         if(!jobId){
            return res.status(400).json({
                message:"JobId is required",
                success:false
            })
         };

         const existingApplication = await  Application.findOne({job:jobId , applicant:userId});
         if(existingApplication){
            return  res.status(400).json({
                message:"You have already applied for this job",
                success:false
            })
         };

         const job = await Job.findById(jobId);
         if(!job){
            return res.status(404).json({
                message:"Job Not Found",
                success:false
            })
         };

         const newApplication = await Application.create({
            job:jobId,
            applicant:userId
         });

         job.applications.push(newApplication._id);
         await job.save();

         return res.status(201).json({
            message:"Job applied successfully",
            success:true
         });
    } catch (error) {
        console.log("Error in Applying",error.message);
        
    }
    
}

export const getAppliedJob = async (req,res) => {
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:"job",
            option:{sort:{createdAt:-1}},
            populate:{
                path:"company",
                option:{sort:{createdAt:-1}}
            }
        });
        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false
            })
        };
        return res.status(201).json({
            application,
            success:true
        });
    } catch (error) {
        console.log("Error in fetching all application ",error.message);
        
    }
}

export const getApplicants = async (req,res) => {
    try {
        const jobId = req.param.id;
        const job = await Job.findById(jobId).populate({
            path:"applications",
            options:{sort:{createdAt:-1}},
            populate:"applicant"
        });
        if(!job){
            return res.status(404).json({
                message:"Applicants not found",
                success:false
            })
        };

        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log("Error in fetching all applicats ",error.message);
        
    }
}

                           