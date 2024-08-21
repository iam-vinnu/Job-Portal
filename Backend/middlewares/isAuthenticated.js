import jwt from "jsonwebtoken";

const isAunthenticated = async(req,res,next)=>{
      try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message:"User is not authenticated",
                success:false,
            })
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        if(!decode){
            return res.status(401).json({
                message:"Invalid Token",
                success:false,

            })
        };

        req.id = decode.userId;
        next();
      } catch (error) {
        console.log('error')
      }
}

export default isAunthenticated;