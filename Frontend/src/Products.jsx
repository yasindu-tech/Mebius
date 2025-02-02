import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import Sort from "./Sort";
import { Skeleton } from "./components/ui/skeleton";
import { useGetProductsQuery,useGetCategoriesQuery } from "./lib/api.js";
import { Heart } from 'lucide-react';
 

function Products(props) {

  const [selectedCategoryId, setSelectedCategoryId] = useState("6799dcee10aedfd1dd9d6b70");
  const [sortOption, setSortOption] = useState("ascending");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const {data: products = [],isLoading:isProductLoading,isError:isProductError,error:productsError} = useGetProductsQuery();
  const { data: categories = [], isLoading: isCategoryLoading, isError: isCategoryError, error: categoryError } = useGetCategoriesQuery();



  useEffect(() => {
    let updatedProducts =
      selectedCategoryId === "6799dcee10aedfd1dd9d6b70" 
        ? [...products]
        : products.filter((prod) => prod.categoryID === selectedCategoryId);

    console.log(updatedProducts)
    if (sortOption === "ascending") {
      updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else {
      updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategoryId, sortOption,products]); 

  const handleTabClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const sortProducts = (sortOption) => {
    setSortOption(sortOption);
  };


if (isProductLoading || isCategoryLoading){
  return(
  <section className="px-8 py-8">
   
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Our Top Products</h2>
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
        <div className="grid grid-cols-4 gap-4 mt-4">
           <Skeleton className="h-80"></Skeleton>
           <Skeleton className="h-80"></Skeleton>
           <Skeleton className="h-80"></Skeleton>
           <Skeleton className="h-80"></Skeleton>
        </div>
    </section>
)}

if(isProductError || isCategoryError){
  return(
  <section className="px-8 py-8">
   
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Our Top Products</h2>
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
        <div>
          <h4 className="font-bold text-red-600">{productsError.message || categoryError.message}</h4>
        </div>
    </section>)
}

  return (
    <section className="px-8 py-8">
   
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold">Our Top Products</h2>
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
      <ProductCards products={filteredProducts}/>
    </section>
  );
}
export default Products;
