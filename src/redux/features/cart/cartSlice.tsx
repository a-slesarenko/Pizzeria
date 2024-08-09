import { CartPizza } from "@/types";
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  totalPrice: number;
  cartPizzas: CartPizza[];
  totalPizzas: number;
}

const getCart = (): CartState => {
  const cartByDefault: CartState = {
    totalPrice: 0,
    cartPizzas: [],
    totalPizzas: 0,
  }
  const savedCart: CartState = JSON.parse(localStorage.getItem("cart"));
  return savedCart ?? cartByDefault;
}

const initialState: CartState = getCart();

const createSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})


export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: (create) => ({
    addPizza: create.reducer((state, action: PayloadAction<CartPizza>) => {
      const addedPizza = state.cartPizzas.find(
        (pizza) => (pizza.id === action.payload.id && pizza.calculatedPrice === action.payload.calculatedPrice)
      );
      if (addedPizza) {
        addedPizza.count++;
      } else if(addedPizza === undefined) {
        state.cartPizzas.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.cartPizzas.reduce((sum, pizza) => {
        return pizza.calculatedPrice * pizza.count + sum;
      }, 0);

      state.totalPizzas = state.cartPizzas.reduce((amount, pizza) => {
        return pizza.count + amount;
      }, 0);
    }),
    decrementPizza: create.reducer((state, action: PayloadAction<CartPizza>) => {
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
    }),
    removePizza: create.reducer((state, action: PayloadAction<CartPizza>) => {
      state.cartPizzas = state.cartPizzas.filter((pizza) => {
        return !(pizza.calculatedPrice === action.payload.calculatedPrice && pizza.id === action.payload.id)
      });

      if (state.cartPizzas.length === 0) {
        state.cartPizzas = [];
        state.totalPizzas = 0;
        state.totalPrice = 0;
        localStorage.removeItem("cart");
      }

      state.totalPrice = state.cartPizzas.reduce((sum, pizza) => {
        return pizza.calculatedPrice * pizza.count + sum;
      }, 0);

      state.totalPizzas = state.cartPizzas.reduce((amount, pizza) => {
        return pizza.count + amount;
      }, 0);
    }),
    clearPizza: create.reducer((state) => {
      state.cartPizzas = [];
      state.totalPizzas = 0;
      state.totalPrice = 0;
      localStorage.removeItem("cart");
    }),
  }),
});

export const { addPizza, decrementPizza, removePizza, clearPizza } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
