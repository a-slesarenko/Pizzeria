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
  searchValue: string;
  sort: Sort;
}

const initialState: FilterState = {
  category: 0,
  searchValue: '',
  sort: {
    name: "популярности (по убыванию)",
    sortValue: "-rating",
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
      setSearchValue: create.reducer((state, action: PayloadAction<string>) => {
        return { ...state, searchValue: action.payload };
      }),
      clearSearchValue: create.reducer((state, action: PayloadAction<string>) => {
        return { ...state, searchValue: action.payload };
      }),
    }),
});

export const { setCategory, setSortValue, setSearchValue, clearSearchValue } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
