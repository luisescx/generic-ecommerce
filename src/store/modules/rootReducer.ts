import { combineReducers } from "redux";
import { cart } from "./cart/reducer";
import { ICartState } from "./cart/types";

export type IReducersState = {
  cart: ICartState;
};

export default combineReducers({
  cart
});
