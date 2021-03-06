import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];
const initialState = { value: items };
export const cartItemSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = findItem(state.value, newItem);
      // console.log(newItem);

      if (duplicate.length > 0) {
        // console.log(1);
        state.value = delItem(state.value, newItem);
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
        // console.log(duplicate[0].id);
      } else {
        // console.log(2);
        state.value = [
          ...state.value,
          {
            ...newItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
      // console.log(state.value);
    },
    updateItem: (state, action) => {
      const itemUpdate = action.payload;
      // console.log(itemUpdate);

      const item = findItem(state.value, itemUpdate);

      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];
        localStorage.setItem(
          "cartItems",
          JSON.stringify(sortItems(state.value))
        );
      }
    },
    deleteItem: (state, action) => {
      const removeItem = action.payload;

      state.value = delItem(state.value, removeItem);
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
    },
    clearCart: (state, action) => {
      state.value = [];
      localStorage.setItem("cartItems", JSON.stringify(sortItems(state.value)));
    },
  },
});

const findItem = (arr, item) => arr.filter((e) => e.slug === item.slug);

const delItem = (arr, item) => arr.filter((e) => e.slug !== item.slug);

const sortItems = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addItem, updateItem, deleteItem, clearCart } =
  cartItemSlice.actions;
export default cartItemSlice.reducer;
