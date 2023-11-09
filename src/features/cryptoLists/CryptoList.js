import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CryptoWidget from "../cryptoWidget/CryptoWidget";
import { getCryptoPairs } from "./cryptoListSlice";

const CryptoList = () => {
  const dispatch = useDispatch();
  let pairs = [];

  useEffect(() => {
    pairs = dispatch(getCryptoPairs());
  });

  return (
    <div>
      {pairs.map((pair) => (
        <CryptoWidget crypto={pair} />
      ))}
    </div>
  );
};

export default CryptoList;
