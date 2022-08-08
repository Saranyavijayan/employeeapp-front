import { configureStore } from "@reduxjs/toolkit";
import  { counterSlice } from "./slices/CounterSlice";
import  baseApi  from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
setupListeners(store.dispatch);
