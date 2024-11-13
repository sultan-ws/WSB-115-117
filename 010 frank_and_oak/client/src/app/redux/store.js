import { configureStore } from '@reduxjs/toolkit'
import parentCategorySlice from './slices/parentCategorySlice';
import productByParentCategorySlice from './slices/productsByParentCategory';
import  cartSlice from './slices/cartSlice';


export const store = configureStore({
  reducer: {
    parentCategories: parentCategorySlice,
    productByParentCategory: productByParentCategorySlice,
    cart: cartSlice
  },
});