import { createReducer } from "@reduxjs/toolkit";
import { IFavoriteState } from "./types";
import { handleFavorite, setFavoriteProducts } from "./actions";

const initialState: IFavoriteState = {
  products: [],
  productsIds: [],
  isInitialDataFetch: false
};

const isProductFavorite = (id: number, localStorageProductsIds: number[]) =>
  localStorageProductsIds.some((item) => item === id);

const favoriteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(handleFavorite, (state, action) => {
      const { product, isFavorite } = action.payload;

      if (isFavorite) {
        const newList = state.products.filter(
          (stateProduct) => stateProduct.id !== product.id
        );
        state.products = newList;
        return;
      }

      state.products.push(product);
    })
    .addCase(setFavoriteProducts, (state, action) => {
      const { products, productsIds } = action.payload;

      const favoritesProducts = products.filter((item) =>
        isProductFavorite(item.id, productsIds)
      );

      state.productsIds = [...productsIds];
      state.products = [...favoritesProducts];
      state.isInitialDataFetch = true;
    });
});

export default favoriteReducer;
