import { Product } from "types/domain/product";

export enum CartActionTypes {
  handleCart = "cart/handleCart",
  addToCart = "cart/addToCart",
  removeFromCart = "cart/removeFromCart",
  handleItemQuantity = "cart/handleItemQuantity",
  updateItemQuantity = "cart/updateItemQuantity",
  handleRemoveCart = "cart/handleRemoveCart",
  setCartsProducts = "cart/setCartsProducts",
  cartInitialFetch = "cart/cartInitialFetch",
  removeAllItemsFromCart = "cart/removeAllItemsFromCart"
}

export type ProductCartStorage = {
  id: number;
  quantity: number;
};

export type ProductCart = {
  quantity: number;
} & Product;

export type ICartState = {
  productsStorage: ProductCartStorage[];
  products: ProductCart[];
  isInitialDataFetch: boolean;
};

export type CartPayloadAction = {
  product: Product;
};

export type HandleCartPayloadAction = {
  isInCart: boolean;
} & CartPayloadAction;

export type HandleItemQuantityPayloadAction = {
  productId: number;
  isMoreQuantity: boolean;
};
