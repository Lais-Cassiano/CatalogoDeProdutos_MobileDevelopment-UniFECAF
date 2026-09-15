import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth-slice";
import detailsProductReducer from "./slices/product-details-slice";

export const store = configureStore({
  reducer: {
    detailsProduct: detailsProductReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
