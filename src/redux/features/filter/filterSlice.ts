import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Sort = {
  name: string;
  sortValue: string;
};

export interface FilterState {
  category: number;
  sort: Sort;
}

const initialState: FilterState = {
  category: 0,
  sort:       {
    name: "популярности 🡓",
    sortValue: "-rating"
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      return { ...state, category: action.payload };
    },
    setSortValue: (state, action) => {
      return { ...state, sort: action.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory, setSortValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
