import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FavoritePayloadAction,
  FavoritesActionTypes,
  IFavoriteState,
  SetFavoriteProductsAction
} from "./types";

const initialState: IFavoriteState = {
  products: [],
  productsIds: [],
  isInitialDataFetch: false
};

const isProductFavorite = (id: number, localStorageProductsIds: number[]) =>
  localStorageProductsIds.some((item) => item === id);

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    handleFavorite(state, action: PayloadAction<FavoritePayloadAction>) {
      const { product, isFavorite } = action.payload;

      if (isFavorite) {
        const newList = state.products.filter(
          (stateProduct) => stateProduct.id !== product.id
        );
        state.products = newList;
        return;
      }

      state.products.push(product);
    },
    setFavoriteProducts(
      state,
      action: PayloadAction<SetFavoriteProductsAction>
    ) {
      const { products, productsIds } = action.payload;

      const favoritesProducts = products.filter((item) =>
        isProductFavorite(item.id, productsIds)
      );

      state.productsIds = [...productsIds];
      state.products = [...favoritesProducts];
      state.isInitialDataFetch = true;
    }
  }
});

const { handleFavorite, setFavoriteProducts } = favoriteSlice.actions;

const checkFavoriteProduct = createAction<FavoritePayloadAction>(
  FavoritesActionTypes.checkFavoriteProduct
);
const initialFetch = createAction(FavoritesActionTypes.initialFetch);

export {
  handleFavorite,
  setFavoriteProducts,
  checkFavoriteProduct,
  initialFetch
};

export default favoriteSlice.reducer;
