import { configureStore } from '@reduxjs/toolkit'
import bagSlice from './bag';
import productSlice from './Products';

const ecommerceStore = configureStore({
    reducer: {
        bag: bagSlice.reducer,
        products: productSlice.reducer
    }
})


export default ecommerceStore;