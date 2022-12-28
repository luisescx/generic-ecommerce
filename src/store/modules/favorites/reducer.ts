import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFavoriteState } from "./types";

const initialState: IFavoriteState = {
  products: []
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    handleFavorite: (state, action: PayloadAction<number>) => {
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

export const favorite = favoriteSlice.reducer;
export const favoriteActions = favoriteSlice.actions;
