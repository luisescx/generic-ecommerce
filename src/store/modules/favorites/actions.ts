import { createAction } from "@reduxjs/toolkit";
import { Product } from "types/domain/product";
import { FavoritesActionTypes } from "./types";

export interface FavoritePayloadAction {
  product: Product;
  isFavorite: boolean;
}

export const checkFavoriteProduct = createAction<FavoritePayloadAction>(
  FavoritesActionTypes.checkFavoriteProduct
);
export const handleFavorite = createAction<FavoritePayloadAction>(
  FavoritesActionTypes.handleFavorite
);
export const initialFetch = createAction(FavoritesActionTypes.initialFetch);

export const setFavoriteProducts = createAction<{
  products: Product[];
  productsIds: number[];
}>(FavoritesActionTypes.setFavoriteProducts);
