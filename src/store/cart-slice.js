import { createSlice } from "@reduxjs/toolkit";

const cartItemsSlice = createSlice({
  name: "cartItmesSlice",
  initialState: { items: [] },
  reducers: {
    add: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { add } = cartItemsSlice.actions;
export default cartItemsSlice.reducer;
