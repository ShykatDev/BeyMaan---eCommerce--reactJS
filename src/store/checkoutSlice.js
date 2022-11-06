import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkoutSlice",
  initialState: [],
  reducers: {
    checkoutItem(state, action) {
      state.push(action.payload);
    },
    removeCheckoutItem(state, action) {
      state.pop(action.payload);
    },
    removeAllChekout(state, action) {
      state.splice(0, state.length);
    },
  },
});

export const { checkoutItem, removeCheckoutItem, removeAllChekout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
