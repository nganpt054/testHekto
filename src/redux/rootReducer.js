import { combineReducers } from "redux";
import cartReducer, { cartItemSlice } from "../redux/reducers/index";

const rootReducer = combineReducers({
  cart: cartItemSlice,
});

export default rootReducer;
