import express from 'express';
import { getProducts,createProduct,getProductById,deleteProduct,updateProduct } from '../application/product.js';



export   const productRouter = express.Router();

productRouter.route('/')
    .get(getProducts)
    .post(createProduct);

productRouter.route('/:id')
    .get(getProductById)
    .delete(deleteProduct)
    .patch(updateProduct);