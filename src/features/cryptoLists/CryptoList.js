import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CryptoWidget from "../cryptoWidget/CryptoWidget";
// import { getCryptoPairs } from "./cryptoListSlice";
import { fetchAllCryptos } from "../cryptoLists/cryptoListSlice";

const CryptoList = () => {
  const dispatch = useDispatch();
  const pairs = useSelector((state) => state.allCryptos.allCryptoList);

  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(fetchAllCryptos());
    // }, 1000);

    dispatch(fetchAllCryptos());
  });

  return (
    <div>
      {pairs.map((pair) => (
        <CryptoWidget key={pair.symbol} crypto={pair} />
      ))}
    </div>
  );
};

export default CryptoList;
