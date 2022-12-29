import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);
