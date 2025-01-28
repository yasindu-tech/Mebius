import express from 'express';
import { getCategories, createCategory, deleteCategory,updateCategory } from '../application/category.js';

export const categoryRouter = express.Router();

categoryRouter.route('/')
    .get(getCategories)
    .post(createCategory);

categoryRouter.route('/:id')
    .delete(deleteCategory)
    .patch(updateCategory);
