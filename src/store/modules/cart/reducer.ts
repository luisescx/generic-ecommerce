import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartState } from "./types";

const initialState: ICartState = {
  products: []
};

const cartSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;

      const index = state.products.findIndex((id) => id === productId);

      if (index >= 0) {
        state.products.splice(index, 1);
        return;
      }

      state.products.push(productId);
    }
  }
});

export const cart = cartSlice.reducer;
export const cartActions = cartSlice.actions;
