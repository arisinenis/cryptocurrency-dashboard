import { configureStore } from "@reduxjs/toolkit";
import cryptoListReducer from "../features/cryptoLists/cryptoListSlice";

export const store = configureStore({
  reducer: {
    allCryptos: cryptoListReducer,
  },
});
