import React from 'react'
import Navigation from './../Navigation';
import Hero from './../Hero';
import Products from './../Products';
import { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';

const HomePage = () => {
  // const [cart, setCart] = useState([]);

  // const handleAddToCart = (product) => {
  //   const foundItem = cart.find((item) => item.product._id === product._id);
  
  //   if (foundItem) {
      
  //     setCart(
  //       cart.map((item) =>
  //         item.product._id === product._id
  //           ? { ...item, quantity: item.quantity + 1 }
  //           : item
  //       )
  //     );
  //   } else {
      
  //     setCart([...cart, { product: product, quantity: 1 }]);
  //   }
  // };
  
  const savedItems = useSelector((state) => state.savedItems.value)
  const cart = useSelector((state)=> state.cart.value)

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) =>{
      count+= item.quantity;
    })


    return count;
  };

  const getSavedItemsQuantity =() =>{
    let count = 0;
    savedItems.forEach((item) =>{
      count+=1;
    })

    return count
  }
  
    return (
      <div>
        <Navigation savedCount = {getSavedItemsQuantity()}  cartCount={getCartQuantity()} />
        <Hero />
        <Products></Products>
    
      </div>
      
    );
}

export default HomePage
