import React from 'react'
import Navigation from './../Navigation';
import Hero from './../Hero';
import Products from './../Products';
import { useState } from "react";
import { useSelector,useDispatch } from 'react-redux';

const HomePage = () => {

  
    return (
      <div>

        <Hero />
        <Products></Products>
    
      </div>
      
    );
}

export default HomePage
