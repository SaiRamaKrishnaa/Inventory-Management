import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ROUTER IMPORTS 
import dashboardRouter from './routes/dashboardRoutes'
import productRouter from "./routes/productRoutes";
import userRoutes from './routes/userRoutes'

import  expenseRoutes from './routes/expenseRoutes'


/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES 

app.use('/dashboard', dashboardRouter)

app.use('/products', productRouter)

app.use('/users',userRoutes )

app.use('/expenses', expenseRoutes)

/* SERVER */
const port = Number(process.env.PORT) || 3001;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});