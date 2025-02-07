import React from 'react'
import { Navigate } from 'react-router'
import { useSelector,useDispatch } from 'react-redux'
import { useUser } from '@clerk/clerk-react'
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { increaseQuantity,decreaseQuantity,deleteFromCart} from '@/lib/features/cartSlice'

const CartPage = () => {
    const cart = useSelector((state)=> state.cart.value)
    const {userId,isLoaded,isSignedIn} = useUser()
    
    if (!isLoaded) {
        return (
        <div>
            <h1 className='text-4xl font-bold'>Your Cart</h1>
            <p>Loading...</p>
        </div>
        )}
    
    if (!isSignedIn) {
        return <Navigate to="/signin" />;
    }
    const dispatch = useDispatch();

    const subtotal = cart.reduce((sum, item) => sum + Number.parseFloat(item.product.price) * item.quantity, 0)
    const deliveryFee = 5.99 
    const total = subtotal + deliveryFee
   return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 min-h-screen bg-gray-100 p-4">
  <Card className="w-full md:w-2/3 bg-white shadow-xl">
    <CardContent className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-center">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.product._id} className="flex items-center mb-4 pb-4 border-b border-gray-200">
            <div className="w-20 h-20 relative mr-4">
              <img
                src={item.product.image || "/placeholder.svg"}
                alt={item.product.name}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="font-semibold text-lg">{item.product.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-blue-600 font-medium">${item.product.price}</p>
            </div>

            <div className="flex items-center mt-2">
              <Button variant="outline" size="icon" onClick={() => dispatch(decreaseQuantity(item.product))}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="mx-2 w-8 text-center">{item.quantity}</span>
              <Button variant="outline" size="icon" onClick={() => dispatch(increaseQuantity(item.product))}>
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="ml-4 text-red-500 hover:text-red-700"
                onClick={() => dispatch(deleteFromCart(item.product))}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))
      )}
    </CardContent>
  </Card>


      
    {cart.length > 0 && (
        <Card className="w-full md:w-1/3 bg-white shadow-xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t border-gray-200">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="w-full mt-6" size="lg">
            Proceed to Checkout
          </Button>
        </CardContent>
      </Card>
      )


    }
  
   
  </div>
  );
}

export default CartPage
