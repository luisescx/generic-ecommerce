import { createAction } from "@reduxjs/toolkit";
import { Product } from "types/domain/product";
import {
  CartActionTypes,
  CartPayloadAction,
  HandleCartPayloadAction,
  HandleItemQuantityPayloadAction,
  ProductCartStorage
} from "./types";

export const addToCart = createAction<CartPayloadAction>(
  CartActionTypes.addToCart
);
export const removeFromCart = createAction<{ productId: number }>(
  CartActionTypes.removeFromCart
);

export const handleCart = createAction<HandleCartPayloadAction>(
  CartActionTypes.handleCart
);

export const handleRemoveCart = createAction<{ productId: number }>(
  CartActionTypes.handleRemoveCart
);

export const cartInitialFetch = createAction(CartActionTypes.cartInitialFetch);

export const setCartsProducts = createAction<{
  products: Product[];
  productsStorage: ProductCartStorage[];
}>(CartActionTypes.setCartsProducts);

export const updateItemQuantity = createAction<
  {
    productsStorage: ProductCartStorage[];
  } & HandleItemQuantityPayloadAction
>(CartActionTypes.updateItemQuantity);

export const handleItemQuantity = createAction<HandleItemQuantityPayloadAction>(
  CartActionTypes.handleItemQuantity
);

export const removeAllItemsFromCart = createAction(
  CartActionTypes.removeAllItemsFromCart
);
