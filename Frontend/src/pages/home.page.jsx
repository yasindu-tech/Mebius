import React from 'react'
import Navigation from './../Navigation';
import Hero from './../Hero';
import Products from './../Products';

const HomePage = () => {
    // const name = "Yasindu";
    const cartCount = 100;
  
    return (
      <div>
        <Navigation  cartCount={cartCount} />
        <Hero />
        <Products></Products>
    
      </div>
      
    );
}

export default HomePage
