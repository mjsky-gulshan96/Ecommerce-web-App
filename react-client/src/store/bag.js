import { createSlice } from '@reduxjs/toolkit'

const bagSlice = createSlice({
    name: 'counter',
    initialState: {
        bagCount: 0,
        productIDs: []
    },
    reducers: {
        addToBag: (state, action) => {
            state.bagCount++;
            state.productIDs.push(action.payload.pid)
        },
        remove: (state, action) => {
            state.bagCount--;
            state.productIDs = state.productIDs.filter((id) => {
                return id !== action.payload.pid;
            })
            return state
        }
    }
})

export const bagActions = bagSlice.actions;
export default bagSlice;
