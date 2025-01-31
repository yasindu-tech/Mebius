import React, { useState, useEffect } from "react";
import ProductCards from "./ProductCards";
import { Separator } from "@/components/ui/separator";
import Tab from "./Tab";
import Sort from "./Sort";
import { Button } from "@/components/ui/button";
import { getCategory, getProducts } from "./lib/api.js";
import { Skeleton } from "./components/ui/skeleton";
import { data } from "react-router";




function Products(props) {

  // const products = [
  //   {
  //     categoryId: "1",
  //     image: "/assets/products/airpods-max.png",
  //     _id: "1",
  //     name: "AirPods Max",
  //     price: "549.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "3",
  //     image: "/assets/products/echo-dot.png",
  //     _id: "2",
  //     name: "Echo Dot",
  //     price: "99.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "2",
  //     image: "/assets/products/pixel-buds.png",
  //     _id: "3",
  //     name: "Galaxy Pixel Buds",
  //     price: "99.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "1",
  //     image: "/assets/products/quietcomfort.png",
  //     _id: "4",
  //     name: "Bose QuiteComfort",
  //     price: "249.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "3",
  //     image: "/assets/products/soundlink.png",
  //     _id: "5",
  //     name: "Bose SoundLink",
  //     price: "119.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "5",
  //     image: "/assets/products/apple-watch.png",
  //     _id: "6",
  //     name: "Apple Watch 9",
  //     price: "699.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "4",
  //     image: "/assets/products/iphone-15.png",
  //     _id: "7",
  //     name: "Apple Iphone 15",
  //     price: "1299.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  //   {
  //     categoryId: "4",
  //     image: "/assets/products/pixel-8.png",
  //     _id: "8",
  //     name: "Galaxy Pixel 8",
  //     price: "549.00",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
  //   },
  // ];
  const [products,setProducts] = useState([])
  const [categories,setCategories] = useState([])

  // const categories = [
  //   { _id: "ALL", name: "All" },
  //   { _id: "1", name: "Headphones" },
  //   { _id: "2", name: "Earbuds" },
  //   { _id: "3", name: "Speakers" },
  //   { _id: "4", name: "Mobile Phones" },
  //   { _id: "5", name: "Smart Watches" },
  // ];

  const [selectedCategoryId, setSelectedCategoryId] = useState("6799dcee10aedfd1dd9d6b70");
  const [sortOption, setSortOption] = useState("ascending");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading,setIsLoading] = useState(true)
  const [err,setError] = useState({
    isError:false,message: " "
  });


  useEffect(()=>{
    getProducts()
      .then((data) => {
        setProducts(data)
      })
      .catch((error)=>{
        setError({isError:true,message:error.message})
      })
      .finally(() => setIsLoading(false));  
  },[])
  
  useEffect(()=>{
    getCategory()
      .then((data) => {
        setCategories(data)
      }).catch((error)=>{
        console.log(error.message)
      })
  },[])
 
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


if (isLoading){
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

if(err.isError){
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
          <h4 className="font-bold text-red-600">{err.message}</h4>
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
      <ProductCards products={filteredProducts} handleAddToCart={props.handleAddToCart}/>
    </section>
  );
}
export default Products;
