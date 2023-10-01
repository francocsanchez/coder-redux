import { createSlice } from "@reduxjs/toolkit";
import { Category, Products } from "../../data";

const initialState = {
  categories: Category,
  products: Products,
  productsFilteredByCategory: [],
  categorySelected: null,
  productIdSelected: null,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategorySelected: (state, action) => {
      state.categorySelected = action.payload;
    },
    setProductIdSelected: (state, action) => {
      state.productIdSelected = action.payload;
    },
    setProductsFilteredByCategory: (state, action) => {
      state.productsFilteredByCategory = action.payload;
    },
  },
});

export const {
  setCategorySelected,
  setProductIdSelected,
  setProductsFilteredByCategory,
} = shopSlice.actions;

export default shopSlice.reducer;
