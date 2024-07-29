import { CartPizza } from "@/types/pizzasTypes";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  totalPrice: number;
  cartPizzas: CartPizza[];
  totalPizzas: number;
}

const initialState: CartState = {
  totalPrice: 0,
  cartPizzas: [],
  totalPizzas: 0,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addPizza: (state, action: PayloadAction<CartPizza>) => {
      const addedPizza = state.cartPizzas.find(
        (pizza) => (pizza.id === action.payload.id && pizza.calculatedPrice === action.payload.calculatedPrice)
      );
      if (addedPizza) {
        addedPizza.count++;
      } else {
        state.cartPizzas.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.cartPizzas.reduce((sum, pizza) => {
        return pizza.calculatedPrice * pizza.count + sum;
      }, 0);

      state.totalPizzas = state.cartPizzas.reduce((amount, pizza) => {
        return pizza.count + amount;
      }, 0);
    },
    decrementPizza: (state, action: PayloadAction<CartPizza>) => {
        const addedPizza = state.cartPizzas.find(
          (pizza) => (pizza.id === action.payload.id && pizza.calculatedPrice === action.payload.calculatedPrice && pizza.size === action.payload.size)
        );
        if (addedPizza.count !== 1) {
          addedPizza.count--;
        }
  
        state.totalPrice = state.cartPizzas.reduce((sum, pizza) => {
          return pizza.calculatedPrice * pizza.count + sum;
        }, 0);
  
        state.totalPizzas = state.cartPizzas.reduce((amount, pizza) => {
          return pizza.count + amount;
        }, 0);
      },
    removePizza: (state, action) => {
      state.cartPizzas = state.cartPizzas.filter((pizza) => {
        return (pizza.calculatedPrice !== action.payload.calculatedPrice)
      });

      if (state.cartPizzas.length === 0) {
        state.cartPizzas = [];
        state.totalPizzas = 0;
        state.totalPrice = 0;
      }

      state.totalPrice = state.cartPizzas.reduce((sum, pizza) => {
        return pizza.calculatedPrice * pizza.count + sum;
      }, 0);

      state.totalPizzas = state.cartPizzas.reduce((amount, pizza) => {
        return pizza.count + amount;
      }, 0);
    },
    clearPizza: (state) => {
      state.cartPizzas = [];
      state.totalPizzas = 0;
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPizza, decrementPizza, removePizza, clearPizza } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
