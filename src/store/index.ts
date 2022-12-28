import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./modules/rootReducer";

export default configureStore({
  reducer: rootReducer
});
