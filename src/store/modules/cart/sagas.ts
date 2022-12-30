import { PayloadAction } from "@reduxjs/toolkit";
import { all, put, select, takeLatest } from "redux-saga/effects";
import { Product } from "types/domain/product";
import {
  getStorageItem,
  LocalStorageKeys,
  setStorageItem
} from "utils/localStorage";
import { IReducersState } from "../rootReducer";
import { addToCart, removeFromCart } from "./actions";
import { CartActionTypes, HandleCartPayloadAction, ProductCart } from "./types";

function checkProductStorage(product: Product, isInCart: boolean) {
  const data = getStorageItem(LocalStorageKeys.cartProducts);

  if (data && isInCart) {
    const newStorageItems = data.filter(
      (storageProduct: ProductCart) => storageProduct.id !== product.id
    );
    setStorageItem(LocalStorageKeys.cartProducts, newStorageItems);

    return;
  }

  const newCartProduct: ProductCart = {
    id: product.id,
    quantity: 1
  };

  if (data && !isInCart) {
    setStorageItem(LocalStorageKeys.cartProducts, [
      ...data,
      { ...newCartProduct }
    ]);

    return;
  }

  setStorageItem(LocalStorageKeys.cartProducts, [{ ...newCartProduct }]);
}

export function* handleCart({
  payload
}: PayloadAction<HandleCartPayloadAction>) {
  const { product } = payload;

  const productsStorage: ProductCart[] = yield select(
    (state: IReducersState) => state.cart.productsStorage
  );

  const isInCart = productsStorage.some((item) => item.id === product.id);

  checkProductStorage(product, isInCart);

  if (isInCart) {
    yield put(removeFromCart({ productId: product.id }));
    return;
  }

  yield put(addToCart({ product }));
}

export function* handleRemoveCart({
  payload
}: PayloadAction<{ productId: number }>) {
  const { productId } = payload;

  const data = getStorageItem(LocalStorageKeys.cartProducts);

  const newStorageItems = data.filter(
    (storageProduct: ProductCart) => storageProduct.id !== productId
  );

  setStorageItem(LocalStorageKeys.cartProducts, newStorageItems);

  yield put(removeFromCart({ productId }));
}

export default all([
  takeLatest(CartActionTypes.handleCart, handleCart),
  takeLatest(CartActionTypes.handleRemoveCart, handleRemoveCart)
]);
