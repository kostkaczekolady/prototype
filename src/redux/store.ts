import { configureStore } from "@reduxjs/toolkit";
import { productsCountReducer } from "./reducers/productsCountReducer";

export default configureStore({
  reducer: {
    productCount: productsCountReducer,
  },
})