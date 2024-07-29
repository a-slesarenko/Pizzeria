import { asyncThunkCreator, buildCreateSlice, PayloadAction } from "@reduxjs/toolkit";

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

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
  reducers: (create) => ({
      setCategory: create.reducer((state, action: PayloadAction<number>) => {
        return { ...state, category: action.payload };
      }),
      setSortValue: create.reducer((state, action: PayloadAction<Sort>) => {
        return { ...state, sort: action.payload };
      }),
    }),
});

// Action creators are generated for each case reducer function
export const { setCategory, setSortValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
