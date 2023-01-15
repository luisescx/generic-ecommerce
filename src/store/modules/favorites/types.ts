import { Product } from "types/domain/product";

export type IFavoriteState = {
  productsIds: number[];
  products: Product[];
  isInitialDataFetch: boolean;
};

export type FavoritePayloadAction = {
  product: Product;
  isFavorite: boolean;
};

export type SetFavoriteProductsAction = {
  products: Product[];
  productsIds: number[];
};

export enum FavoritesActionTypes {
  handleFavorite = "favorite/handleFavorite",
  checkFavoriteProduct = "favorite/checkFavoriteProduct",
  initialFetch = "favorite/initialFetch",
  setFavoriteProducts = "favorite/setFavoriteProducts"
}
