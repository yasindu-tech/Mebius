import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice.js'
import cartReducer from './features/cartSlice.js'
import savedReducer from './features/savedSlice.js'
import { Api  } from './api.js'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    cart:cartReducer,
    savedItems:savedReducer,
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware), 
})

setupListeners(store.dispatch) 