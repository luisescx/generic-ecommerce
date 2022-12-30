import { createReducer } from "@reduxjs/toolkit";
import { ICartState } from "./types";
import { addToCart, removeFromCart } from "./actions";

const initialState: ICartState = {
  productsStorage: [],
  products: []
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const { product } = action.payload;

      state.products.push(product);
      state.productsStorage.push({
        id: product.id,
        quantity: 1
      });
    })
    .addCase(removeFromCart, (state, action) => {
      const { productId } = action.payload;

      const indexProductsStorage = state.productsStorage.findIndex(
        (item) => item.id === productId
      );

      if (indexProductsStorage >= 0) {
        state.productsStorage.splice(indexProductsStorage, 1);
        state.products.splice(
          state.products.findIndex((item) => item.id === productId),
          1
        );
      }
    });
});

export default cartReducer;
