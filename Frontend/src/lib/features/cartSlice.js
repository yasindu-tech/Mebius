import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addToCart:(state,action)=>{
    const product = action.payload;
    const foundItem = state.value.find((item) => item.product._id === product._id);

    if(foundItem){
        foundItem.quantity += 1;
        return;
    }

      state.value.push({product:action.payload,quantity:1})
     },
     increaseQuantity: (state, action) => {
        const product = action.payload;
        state.value.find((item) => item.product._id === product._id).quantity += 1;
      

     },
      decreaseQuantity: (state, action) => {
          const product = action.payload;
          state.value.find((item)=> item.product._id === product._id).quantity -= 1;

      },
      deleteFromCart:(state,action)=>{
        const product = action.payload;
        const index = state.value.findIndex((item) => item.product._id === product._id);
        state.value.splice(index,1);
      }




   }
  }
)


export const { addToCart,increaseQuantity,decreaseQuantity,deleteFromCart } = cartSlice.actions

export default cartSlice.reducer