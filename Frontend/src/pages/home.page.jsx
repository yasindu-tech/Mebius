import React from 'react'
import Navigation from './../Navigation';
import Hero from './../Hero';
import Products from './../Products';
import { useState } from "react";

const HomePage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const foundItem = cart.find((item) => item.product._id === product._id);
  
    if (foundItem) {
      
      setCart(
        cart.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      
      setCart([...cart, { product: product, quantity: 1 }]);
    }
  };
  
  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) =>{
      count+= item.quantity;
    })

    return count;
  };
  
    return (
      <div>
        <Navigation  cartCount={getCartQuantity()} />
        <Hero />
        <Products handleAddToCart={handleAddToCart}></Products>
    
      </div>
      
    );
}

export default HomePage
