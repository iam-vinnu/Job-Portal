import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import bodyParser from "body-parser";
dotenv.config({});

//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
        origin:'http://localhost:5173',
        Credential:true
};
app.use(cors(corsOptions));
const PORT = process.env.PORT ||  3000;


app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`);
});


