import express from "express"
import colors from "colors"
import dotenv from 'dotenv'
import morgan from "morgan";
import connnectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import homeRoute from './routes/homeRoute.js'
import cors from 'cors';
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

//configure env
dotenv.config();

//database config
connnectDB();

//rest object
const app = express();

//middleware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);



//rest api
app.use("/", homeRoute);

app.use("/register", authRoutes); 


//Port
const PORT =  process.env.PORT||8000;

//run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
});