import express from 'express';
const app = express();
import {productRouter} from './api/product.js';
import globalErrorHandelingMiddleware from './api/middleware/global-error-handeling-middleware.js';
import {categoryRouter} from './api/category.js';

app.use(express.json()); // For parsing JSON requests

app.use('/api/products', productRouter);
app.use('/api/categories', categoryRouter);
app.use(globalErrorHandelingMiddleware)

app.listen(8000, () => console.log(`Server running on port ${8000}`));    