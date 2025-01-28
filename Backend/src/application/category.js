import NotFoundError from "../domain/errors/not-found-error.js";
const categories = [
  { _id: "ALL", name: "All" },
  { _id: "1", name: "Headphones" },
  { _id: "2", name: "Earbuds" },
  { _id: "3", name: "Speakers" },
  { _id: "4", name: "Mobile Phones" },
  { _id: "5", name: "Smart Watches" },
];

export const getCategories = (req, res, next) => {
  try {
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
};

export const createCategory = (req, res, next) => {
  try {
    const newCategory = req.body;
    categories.push(newCategory);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = (req, res, next) => {
  try {
    const id = req.params.id;
    const index = categories.findIndex((category) => category._id === id);
    if (index > -1) {
      categories.pop(index);
      res.status(200).send();
    } else {
      throw new NotFoundError("Category not found");
    }
  } catch (error) {
    next(error);
  }
};

export const updateCategory = (req, res, next) => {
  try {
    const id = req.params.id;
    const index = categories.findIndex((category) => category._id === id);

    if (index > -1) {
      categories[index] = {
        ...categories[index],
        ...req.body,
      };
      res.status(200).send();
    } else {
      throw new NotFoundError("Category not found");
    }
  } catch (error) {
    next(error);
  }
};
