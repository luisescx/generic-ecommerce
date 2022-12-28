import { combineReducers } from "redux";
import { cart } from "./cart/reducer";
import { favorite } from "./favorites/reducer";
import { ICartState } from "./cart/types";

export type IReducersState = {
  cart: ICartState;
};

export default combineReducers({
  cart,
  favorite
});
