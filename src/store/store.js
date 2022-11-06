import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    checkout: checkoutSlice,
  },
});

export default store;
