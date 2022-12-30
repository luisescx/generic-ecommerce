import { createAction } from "@reduxjs/toolkit";
import {
  CartActionTypes,
  CartPayloadAction,
  HandleCartPayloadAction
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
