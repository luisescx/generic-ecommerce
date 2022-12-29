import { PayloadAction } from "@reduxjs/toolkit";
import { productsMockList } from "mocks/productsMock";
import { all, put, takeLatest } from "redux-saga/effects";
import {
  getStorageItem,
  LocalStorageKeys,
  setStorageItem
} from "utils/localStorage";
import {
  FavoritePayloadAction,
  handleFavorite,
  setFavoriteProducts
} from "./actions";
import { FavoritesActionTypes } from "./types";

function saveFavorite(favoritesList: number[]) {
  setStorageItem(LocalStorageKeys.favoritesProducts, favoritesList);
}

function checkProductsStorage(isFavorite: boolean, productId: number) {
  const data = getStorageItem(LocalStorageKeys.favoritesProducts);

  if (data && isFavorite) {
    const storageItems = data.filter((itemId: number) => itemId !== productId);
    saveFavorite(storageItems);

    return;
  }

  if (data && !isFavorite) {
    saveFavorite([...data, productId]);
    return;
  }

  setStorageItem(LocalStorageKeys.favoritesProducts, [productId]);
}

export function* checkFavoriteProduct({
  payload
}: PayloadAction<FavoritePayloadAction>) {
  const { product, isFavorite } = payload;

  checkProductsStorage(isFavorite, product.id);

  yield put(handleFavorite({ product, isFavorite }));
}

export function* initialFetch() {
  const data = getStorageItem(LocalStorageKeys.favoritesProducts);

  if (data?.length) {
    yield put(
      setFavoriteProducts({ products: productsMockList, productsIds: data })
    );
  }
}

export default all([
  takeLatest(FavoritesActionTypes.checkFavoriteProduct, checkFavoriteProduct),
  takeLatest(FavoritesActionTypes.initialFetch, initialFetch)
]);
