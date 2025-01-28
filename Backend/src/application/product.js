import NotFoundError from "../domain/errors/not-found-error.js";

const products = [
  {
    categoryId: "1",
    image: "/assets/products/airpods-max.png",
    id: "1",
    name: "AirPods Max",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/echo-dot.png",
    id: "2",
    name: "Echo Dot",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "2",
    image: "/assets/products/pixel-buds.png",
    id: "3",
    name: "Galaxy Pixel Buds",
    price: "99.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "1",
    image: "/assets/products/quietcomfort.png",
    id: "4",
    name: "Bose QuiteComfort",
    price: "249.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "3",
    image: "/assets/products/soundlink.png",
    id: "5",
    name: "Bose SoundLink",
    price: "119.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "5",
    image: "/assets/products/apple-watch.png",
    id: "6",
    name: "Apple Watch 9",
    price: "699.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/iphone-15.png",
    id: "7",
    name: "Apple Iphone 15",
    price: "1299.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
  {
    categoryId: "4",
    image: "/assets/products/pixel-8.png",
    id: "8",
    name: "Galaxy Pixel 8",
    price: "549.00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  },
];

export const getProducts = (req, res, next) => {
  try {
    res.status(200).json(products).send();
  } catch (error) {
    next(error);
  }
};
export const createProduct = (req, res, next) => {
  try {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

export const getProductById = (req, res, next) => {
  try {
    const id = req.params.id;
    const product = products.find((product) => product.id === id);
    if (product) {
      res.status(200).json(product);
    } else {
      throw new NotFoundError("Product not found");
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const index = products.findIndex((product) => product.id === id);
    if (index > -1) {
      products.pop(index);
      res.status(200).send();
    } else {
      throw new NotFoundError("Product not found");
    }
  } catch (error) {
    next(error);
  }
};

export const updateProduct = (req, res, next) => {
  try {
    const id = req.params.id;
    const index = products.findIndex((product) => product.id === id);

    if (index > -1) {
      products[index] = {
        ...products[index],
        ...req.body,
      };
      res.status(200).send();
    } else {
      throw new NotFoundError("Product not found");
    }
  } catch (error) {
    next(error);
  }
};
