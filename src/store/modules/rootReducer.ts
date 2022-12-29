import { combineReducers } from "redux";
import { cart } from "./cart/reducer";
import favorite from "./favorites/reducer";
import { ICartState } from "./cart/types";
import { IFavoriteState } from "./favorites/types";

export type IReducersState = {
  cart: ICartState;
  favorite: IFavoriteState;
};

export default combineReducers({
  cart,
  favorite
});
