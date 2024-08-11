import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { filterReducer } from "./features/filter/filterSlice";
import { cartReducer } from "./features/cart/cartSlice";
import { pizzasReducer } from "./features/pizzas/pizzasSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
