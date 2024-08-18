import {Company} from "../models/company.model.js"
export const registerCompany = async(req,res)=>{
    try {
        const {companyName} = req.body ;
        if(!companyName){
            return res.status(400).json({
                message:"Company Name is required",
                success:false
            })
        }
        let company = await Company.findOne({name:companyName});
        if(company){
            return res.status(400).json({
                message:"You cant register same company",
                success:false
            })
        };
        company = await Company.create({
            name:companyName,
            userId:req.id,

        });
         
        return res.status(201).json({
            message:"Company created Successfully",
            company,
            success:true
        })
    } catch (error) {
        console.log("error");
    }
}

export const getCompany = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}