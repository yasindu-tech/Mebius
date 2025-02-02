import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "./lib/features/cartSlice.js";
import { Heart, Satellite } from "lucide-react";
import { toggleSave } from "./lib/features/savedSlice.js";

function ProductCard(props) {
  const [num, setNum] = useState(0);
  const count = useSelector((state) => state.counter.value)
  const savedItems = useSelector((state) => state.savedItems.value)
  const isSaved = savedItems.some((item) => item._id == props._id)
  const dispatch = useDispatch()

  const handleSave = (e) =>{
    dispatch(
      toggleSave({
        _id:props._id,
      name:props.name,
       price:props.price,
      image:props.image,
     description:props.description,
      })
    )
  }


  const handleClick = (e) => {
   dispatch(
    addToCart({
      _id:props._id,
      name:props.name,
       price:props.price,
      image:props.image,
     description:props.description,
    })
  )
  
  };

  
  return (
    <Card>
       
      <div className="h-80 bg-card rounded-lg p-4 relative">
         <img src={props.image} className="block" /> 
      </div> 
      <div className="flex px-4 mt-4  items-center justify-between">
        <h2 className="text-2xl  font-semibold">{props.name}</h2>
        <span className="block text-lg font-medium">{props.price}</span>
        <Heart 
        onClick={handleSave}
        className={`cursor-pointer ${isSaved ? "fill-red-500" : ""}`}/>
      </div>
      <div className="px-4 mt-2">
        <p className="text-sm">{props.description}</p>
      </div>
      <div className="mt-1 p-4">
        <Button className="w-full" onClick={handleClick}>
          Buy Now
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;