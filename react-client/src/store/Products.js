import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        updateProducts: (state, action) => {
            state = action.payload.products
            return state
        }
    }
})

export const productActions = productSlice.actions
export default productSlice;