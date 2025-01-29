import NotFoundError from "../domain/errors/not-found-error.js";
import Category from "../infastructure/schemas/Category.js";

export const getCategories = async (req, res, next) => {
  try {
    const data = await Category.find();
    res.status(200).json(data).send();
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const newCategory = req.body;
    await Category.create(newCategory);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const categories = await Category.findByIdAndDelete(id);

    if (!categories) {
      throw new NotFoundError("Category not found");
    }

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const updateCategory = async (req, res, next) => {
  try {
    const id = req.params.id;
    const categories = await Category.findByIdAndUpdate(id, req.body);

    if (!categories) {
      throw new NotFoundError("Category not found");
    }
    
    res.status(200).send();
    
  } catch (error) {
    next(error);
  }
};
