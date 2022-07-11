import * as actionType from "../actions/actionType";
import { createSlice } from "@reduxjs/toolkit";
const cartDemo = [{
  id:"sg11",
  image: "/images/lectus.png",
  title: "Lectus vulputate faucibus",
},
{
  id:"sg12",
  image: "/images/10011 1.png",
  title: "Purus risus, ut",
},]
const initialState = {
  cartAr: cartDemo
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.BUY_PRODUCT:
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return {
          cartAr: [...state.cartAr, action.payload],
        };
      } else {
        let newcart = state.cartAr;
        const objIndex = newcart.findIndex(
        (obj) => obj.id == action.payload.id
        );
        console.log(newcart[objIndex]);
        if (newcart[objIndex].quantity === undefined) {
          newcart[objIndex].quantity = 2;
        } else {
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
        }
        localStorage.setItem("cart", JSON.stringify((state.cart)));
        return { cartAr: [...newcart] };
      }
    case actionType.DELETE_PRODUCT:
      let newcart = state.cartAr;
      const objIndex = newcart.findIndex((obj) => obj.id == action.payload.id);
      newcart.splice(objIndex, 1);
      console.log(">>newcart", newcart);
      return { cartAr: [...newcart], totalprice: 0 };

    default:
      return state;
  }
};
export const cartItemSlice=createSlice({
  name:"cart",
  initialState,
  reducers: cartReducer,
})



export default cartItemSlice.reducer;
