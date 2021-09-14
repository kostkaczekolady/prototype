import {setChangeProductCount} from "../actions/updateProductCount";
import { createReducer } from '@reduxjs/toolkit'

const initialState = { value: 0 } 

export const productsCountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setChangeProductCount, (state, action) => {
      state.value = action.payload
    })
})