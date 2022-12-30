import { all } from "redux-saga/effects";

import favorites from "./favorites/sagas";
import cart from "./cart/sagas";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function* rootSaga(): Generator<any> {
  return yield all([favorites, cart]);
}
