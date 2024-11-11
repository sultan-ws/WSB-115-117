import { configureStore } from '@reduxjs/toolkit'
import parentCategorySlice from './slices/parentCategorySlice';
import productByParentCategorySlice from './slices/productsByParentCategory';


export const store = configureStore({
  reducer: {
    parentCategories: parentCategorySlice,
    productByParentCategory: productByParentCategorySlice
  },
});