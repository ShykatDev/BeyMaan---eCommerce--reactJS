import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.push(action.payload);
    },
    removeItems(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    removeAll(state, action) {
      state.splice(0, state.length);
      console.log("removed all");
    },
  },
});

export const { addItems, removeItems, removeAll } = cartSlice.actions;
export default cartSlice.reducer;
