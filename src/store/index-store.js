import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggle-slice";
import cartSlice from "./cart-slice";
const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, addCart: cartSlice },
});

export default store;
