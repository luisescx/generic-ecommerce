import { PayloadAction } from "@reduxjs/toolkit";
import { productsMockList } from "mocks/productsMock";
import { all, put, select, takeLatest } from "redux-saga/effects";
import { Product } from "types/domain/product";
import {
  getStorageItem,
  LocalStorageKeys,
  setStorageItem
} from "utils/localStorage";
import { IReducersState } from "../rootReducer";
import {
  addToCart,
  removeFromCart,
  setCartsProducts,
  updateItemQuantity
} from "./actions";
import {
  CartActionTypes,
  HandleCartPayloadAction,
  HandleItemQuantityPayloadAction,
  ProductCart,
  ProductCartStorage
} from "./types";

function checkProductStorage(product: Product, isInCart: boolean) {
  const data = getStorageItem(LocalStorageKeys.cartProducts);

  if (data && isInCart) {
    const newStorageItems = data.filter(
      (storageProduct: ProductCartStorage) => storageProduct.id !== product.id
    );
    setStorageItem(LocalStorageKeys.cartProducts, newStorageItems);

    return;
  }

  const newCartProduct: ProductCartStorage = {
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

  const productsStorage: ProductCartStorage[] = yield select(
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
    (storageProduct: ProductCartStorage) => storageProduct.id !== productId
  );

  setStorageItem(LocalStorageKeys.cartProducts, newStorageItems);

  yield put(removeFromCart({ productId }));
}

export function* cartInitialFetch() {
  const isInitialDataFetch: boolean = yield select(
    (state: IReducersState) => state.cart.isInitialDataFetch
  );

  if (!isInitialDataFetch) {
    const data = getStorageItem(LocalStorageKeys.cartProducts);

    if (data?.length) {
      yield put(
        setCartsProducts({ products: productsMockList, productsStorage: data })
      );
    }
  }
}

export function* handleItemQuantity({
  payload
}: PayloadAction<HandleItemQuantityPayloadAction>) {
  const { productId, isMoreQuantity } = payload;

  const data: ProductCart[] =
    getStorageItem(LocalStorageKeys.cartProducts) || [];

  const index = data.findIndex((item) => item.id === productId);

  if (index >= 0) {
    const newStorageItems = [...data];

    if (isMoreQuantity) {
      newStorageItems[index].quantity++;
    } else {
      newStorageItems[index].quantity--;
    }

    setStorageItem(LocalStorageKeys.cartProducts, newStorageItems);

    yield put(
      updateItemQuantity({
        isMoreQuantity,
        productId,
        productsStorage: newStorageItems
      })
    );
  }
}

export default all([
  takeLatest(CartActionTypes.handleCart, handleCart),
  takeLatest(CartActionTypes.handleRemoveCart, handleRemoveCart),
  takeLatest(CartActionTypes.cartInitialFetch, cartInitialFetch),
  takeLatest(CartActionTypes.handleItemQuantity, handleItemQuantity)
]);
