import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];
export const productSlice = createSlice({
  name: "liked-products-id",
  initialState,
  reducers: {
    addToLikedProducts: (state, action) => {
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    },
    removeLikedProducts: (state, action) => {
      return state.filter((p) => p !== action.payload);
    },
    removeAll: (state) => {
      state = [];
      return state;
    },
  },
});
export default productSlice.reducer;
export const { addToLikedProducts, removeLikedProducts, removeAll } = productSlice.actions;
