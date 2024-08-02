import { Pizza } from "@/types/pizzasTypes";
import { asyncThunkCreator, buildCreateSlice, type PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const createSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
  })

export interface PizzasState {
  allPizzas: Pizza[];
  returnToServer: Pizza[];
  status: "loading" | "success" | "error";
}

const initialState: PizzasState = {
  allPizzas: [],
  returnToServer: [],
  status: "loading",
};

export const pizzasSlice = createSlice({
  name: "Pizzas",
  initialState,
  reducers: (create) => ({
    setPizzas: create.reducer((state, action: PayloadAction<Pizza[]>) => {
        state.allPizzas = action.payload
    }),
    fetchPizzas: create.asyncThunk<Pizza[], string>(async (href) => {
    const {data} = await axios.get <Pizza[]> (href);
    return data;
},{
    pending: (state) => {
        state.status = "loading";
        state.allPizzas = [];
     },
     fulfilled: (state, action) => {
        state.allPizzas = action.payload;
        state.returnToServer = action.payload.map((pizza) => {
          return {...pizza, calculatedPrice: pizza.basePrice}
        });
        state.status = "success";
     },
     rejected: (state) => {
        state.status = "error";
        state.allPizzas = [];
     },
})
  }),
});

export const { setPizzas, fetchPizzas } = pizzasSlice.actions;

export const pizzasReducer = pizzasSlice.reducer;