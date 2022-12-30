import { Product } from "types/domain/product";

export type ProductCart = {
  id: number;
  quantity: number;
};

export type ICartState = {
  productsStorage: ProductCart[];
  products: Product[];
};

export enum CartActionTypes {
  handleCart = "cart/handleCart",
  addToCart = "cart/addToCart",
  removeFromCart = "cart/removeFromCart",
  updateItemQuantity = "cart/updateItemQuantity",
  handleRemoveCart = "cart/handleRemoveCart"
}

export type CartPayloadAction = {
  product: Product;
};

export type HandleCartPayloadAction = {
  isInCart: boolean;
} & Pick<CartPayloadAction, "product">;
