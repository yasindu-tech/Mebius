import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import Sort from "./Sort";
import { Button } from "@/components/ui/button";

function Products() {
  const products = [
    {
      categoryId: "1",
      image: "/assets/products/airpods-max.png",
      _id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/echo-dot.png",
      _id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/assets/products/pixel-buds.png",
      _id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/assets/products/quietcomfort.png",
      _id: "4",
      name: "Bose QuiteComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/assets/products/soundlink.png",
      _id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/assets/products/apple-watch.png",
      _id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/iphone-15.png",
      _id: "7",
      name: "Apple Iphone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/assets/products/pixel-8.png",
      _id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];

  const categories = [
    { _id: "ALL", name: "All" },
    { _id: "1", name: "Headphones" },
    { _id: "2", name: "Earbuds" },
    { _id: "3", name: "Speakers" },
    { _id: "4", name: "Mobile Phones" },
    { _id: "5", name: "Smart Watches" },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [sortOption, setSortOption] = useState("ascending");
  const [filteredProducts, setFilteredProducts] = useState(products);

 
  useEffect(() => {
    let updatedProducts =
      selectedCategoryId === "ALL"
        ? [...products]
        : products.filter((el) => el.categoryId === selectedCategoryId);

    if (sortOption === "ascending") {
      updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategoryId, sortOption]); 

  const handleTabClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const sortProducts = (sortOption) => {
    setSortOption(sortOption);
  };

  const getProducts = async () =>{
    try {
      const res = await fetch("http://localhost:8000/api/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);      
    }
  };
  

  return (
    <section className="px-8 py-8">
   
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Our Top Products</h2>
          <div>
            <Button onClick={() => getProducts()}>Get Products</Button>
          </div>
          <Sort sortOption={sortOption} onSortOptionChange={sortProducts} />
        </div>
      

      <Separator className="my-2" />
      <div className="flex items-center mt-4 gap-4">
        {categories.map((category) => (
          <Tab
            key={category._id}
            name={category.name}
            _id={category._id}
            selectedCategoryId={selectedCategoryId}
            onTabClick={handleTabClick}
          />
        ))}
      </div>
      <ProductCards products={filteredProducts} />
    </section>
  );
}

export default Products;
