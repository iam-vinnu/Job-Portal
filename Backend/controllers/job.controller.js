import { Job } from "../models/job.model.js";

export const postJob = async(req,res)=>{
    try {
        const {title , description , requirments , salary , location , jobType , experience , companyId} = req.body ;
        const userId = req.id;
        if(!title || !description || !requirments || !salary || !location || !jobType || !experience || !companyId){
            return res.status(400).json({
                message:"Something is Missing",
                success:false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirments : requirments.split(","),
            salary:Number(salary) ,
            location ,
            jobType ,
            experienceLevel : experience ,
            companyId :companyId,
            created_by:userId
        });

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
            const jobs = await Job.find(query);
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