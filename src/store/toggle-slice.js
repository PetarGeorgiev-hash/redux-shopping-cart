import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { cartIsVisable: false },
  reducers: {
    toggle: (state) => {
      state.cartIsVisable = !state.cartIsVisable;
    },
  },
});
export const { toggle } = toggleSlice.actions;
export default toggleSlice;
