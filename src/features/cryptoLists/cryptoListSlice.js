import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  allCryptoList: [],
  cryptoPair: {},
  cryptoParameter: "",
  loading: false,
};

export const fetchAllCryptos = createAsyncThunk(
  "allCryptos/fetchAllCryptos",
  async (thunkAPI) => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/24hr"
    );
    return result.data;
  }
);

// Fetch related crypto datas from binance api
export const getRelatedCryptoInfos = createAsyncThunk(
  "allCryptos/getRelatedCryptoInfos",
  async (pairData, thunkAPI) => {
    const result = await axios.get(
      "https://api.binance.com/api/v3/ticker/24hr?symbol=" + pairData
    );

    return result.data;
  }
);

export const cryptoListSlice = createSlice({
  name: "allCryptos",
  initialState,
  reducers: {
    changeCryptoParameter: (state, payload) => {
      state.cryptoParameter = payload;
      state.cryptoPair = getRelatedCryptoInfos(state.cryptoParameter);
    },
  },
  extraReducers: {
    [fetchAllCryptos.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllCryptos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allCryptoList = payload;
    },
    [fetchAllCryptos.rejected]: (state) => {
      state.loading = false;
    },
    [getRelatedCryptoInfos.pending]: (state) => {
      state.loading = true;
    },
    [getRelatedCryptoInfos.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cryptoPair = payload;
    },
    [getRelatedCryptoInfos.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { changeCryptoParameter } = cryptoListSlice.actions;

export default cryptoListSlice.reducer;
