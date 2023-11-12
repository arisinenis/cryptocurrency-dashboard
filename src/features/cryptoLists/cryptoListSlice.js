import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  allCryptoList: [],
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

export const cryptoListSlice = createSlice({
  name: "allCryptos",
  initialState,
  reducers: {},
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
  },
});

// export const { getCryptoPairs } = cryptoListSlice.actions;

export default cryptoListSlice.reducer;
