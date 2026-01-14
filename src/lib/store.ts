import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice';
import {apiSlice } from './features/api/apiSlice';
import productSlice from './features/product/productSlice';
import cartSlice from './features/cart/cartSlice';


export const makeStore = () => {
  return configureStore({
    reducer: {
      counter : counterSlice,
      product : productSlice,
      cart: cartSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']