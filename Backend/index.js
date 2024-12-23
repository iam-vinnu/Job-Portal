import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
import bodyParser from "body-parser";
import path from "path";
dotenv.config({});

//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions ={
    origin:"https://job-portal-uqtw.onrender.com",
    credentials:true
}
app.use(cors(corsOptions));
const PORT = process.env.PORT ||  3000;
const _dirname = path.resolve();

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationRoute);
app.use(express.static(path.join(_dirname,"/Frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,'Frontend','dist','index.html'));
})
app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`);
});


