import express from 'express';


const app = express();
import {productRouter} from './api/product.js';
import globalErrorHandelingMiddleware from './api/middleware/global-error-handeling-middleware.js';
import {categoryRouter} from './api/category.js';
import { connectDB } from './db.js';
import 'dotenv/config';
import cors from "cors";

app.use(express.json()); // For parsing JSON requests
app.use(cors({ origin: "http://localhost:5173" }));

app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use(globalErrorHandelingMiddleware)

connectDB();
app.listen(8000, () => console.log(`Server running on port ${8000}`));    