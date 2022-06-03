import {createSlice} from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    rootCategories: [],
  },
  reducers: {
    setRootCategory(state, action) {
      state.rootCategories = action.payload
    }
  }
})

export const { setRootCategory } = categoriesSlice.actions

export const { reducer: categoriesReducer } = categoriesSlice
