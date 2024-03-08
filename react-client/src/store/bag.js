import { createSlice } from '@reduxjs/toolkit'

const bagSlice = createSlice({
    name: 'counter',
    initialState: {
        bagCount: 0,
        products: []
    },
    reducers: {
        addToBag: (state, action) => {
            state.bagCount++;
            state.products.push(action.payload.pid)
            console.log(state.products);
        },
        remove: (state, action) => {
            state.bagCount--;
            state.products = state.products.filter((id) => {
                id !== action.payload.pid;
            })
            console.log(state);
        }
    }
})

export const bagActions = bagSlice.actions;
export default bagSlice;
