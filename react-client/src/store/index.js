import { configureStore } from '@reduxjs/toolkit'
import bagSlice from './bag';

const ecommerceStore = configureStore({
    reducer: {
        bag: bagSlice.reducer
    }
})


export default ecommerceStore;