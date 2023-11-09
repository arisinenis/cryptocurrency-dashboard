import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  allCryptoList: [],
};

export const fetchAllCryptos = async () => {
  const result = await axios.get("https://api.binance.com/api/v3/ticker/24hr");
  return result.data;
};

export const cryptoListSlice = createSlice({
  name: "allCryptos",
  initialState,
  reducers: {
    getCryptoPairs: (state) => {
      state.allCryptoList = fetchAllCryptos();
    },
  },
});

export const { getCryptoPairs } = cryptoListSlice.actions;

export default cryptoListSlice.reducer;
