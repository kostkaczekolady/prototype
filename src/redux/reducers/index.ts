import { combineReducers } from 'redux';
import { productsCountReducer } from './productsCountReducer.js';

export default combineReducers({
  productsCount: productsCountReducer,
});
