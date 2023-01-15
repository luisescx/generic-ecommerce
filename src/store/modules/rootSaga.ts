import { all, StrictEffect } from "redux-saga/effects";

import favorites from "./favorites/sagas";
import cart from "./cart/sagas";

export default function* rootSaga(): Generator<StrictEffect> {
  return yield all([favorites, cart]);
}
