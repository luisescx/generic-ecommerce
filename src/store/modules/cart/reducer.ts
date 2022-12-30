import { createReducer } from "@reduxjs/toolkit";
import { ICartState, ProductCart } from "./types";
import {
  addToCart,
  removeFromCart,
  setCartsProducts,
  updateItemQuantity
} from "./actions";
import { Product } from "types/domain/product";

const initialState: ICartState = {
  productsStorage: [],
  products: [],
  isInitialDataFetch: false
};

const findCartProduct = (id: number, products: Product[]) =>
  products.find((item) => item.id === id);

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action) => {
      const { product } = action.payload;

      state.products.push({
        ...product,
        quantity: 1
      });
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
    })
    .addCase(setCartsProducts, (state, action) => {
      const { products, productsStorage } = action.payload;

      const newStorageProducts = productsStorage.map((item) => {
        return {
          quantity: item.quantity,
          ...findCartProduct(item.id, products)
        };
      }) as ProductCart[];

      state.productsStorage = [...productsStorage];
      state.products = [...newStorageProducts];
      state.isInitialDataFetch = true;
    })
    .addCase(updateItemQuantity, (state, action) => {
      const { isMoreQuantity, productId, productsStorage } = action.payload;

      state.productsStorage = [...productsStorage];

      const index = state.products.findIndex((item) => item.id === productId);

      if (isMoreQuantity) {
        state.products[index].quantity++;
        return;
      }

      state.products[index].quantity--;
    });
});

export default cartReducer;
