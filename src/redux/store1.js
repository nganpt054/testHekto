import { configureStore } from "@reduxjs/toolkit";
import CartItemsSlice from "./CartItemsSlice";


const store = configureStore({
  reducer: {
    cartItems: CartItemsSlice,
  },
});

export default store;