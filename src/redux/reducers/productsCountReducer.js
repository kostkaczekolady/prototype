import { handleAction } from "redux-actions";
import {setChangeProductCount} from "../actions/updateProductCount";

const defaultState = 0;

export const productsCountReducer = handleAction(
  setChangeProductCount,
  (state, action) => action.payload,
  defaultState,
);
