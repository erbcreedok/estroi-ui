import { configureStore } from '@reduxjs/toolkit'
import {categoriesReducer} from "./slices/categoriesReducer";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
})
