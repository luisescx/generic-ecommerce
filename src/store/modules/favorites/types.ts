import { Product } from "types/domain/product";

export type IFavoriteState = {
  productsIds: number[];
  products: Product[];
  isInitialDataFetch: boolean;
};

export enum FavoritesActionTypes {
  handleFavorite = "favorite/handleFavorite",
  checkFavoriteProduct = "favorite/checkFavoriteProduct",
  initialFetch = "favorite/initialFetch",
  setFavoriteProducts = "favorite/setFavoriteProducts"
}
