import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeCryptoParameter } from "../cryptoLists/cryptoListSlice";

const CryptoWidget = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="display-container">
        <div className="name">{props.crypto.symbol}</div>
      </div>
      <div className="display-container btn-container">
        <Link
          onClick={() => dispatch(changeCryptoParameter(props.crypto.symbol))}
          to="cryptoDetail"
        >
          See Details
        </Link>
      </div>
      <div className="price-container">
        <div className="price">{props.crypto.lastPrice}</div>
        <div
          className={`price-change ${
            parseInt(props.crypto.priceChangePercent) < 0 ? "danger" : "success"
          }`}
        >
          {props.crypto.priceChangePercent &&
            `${props.crypto.priceChangePercent}%`}
        </div>
      </div>
    </div>
  );
};

export default CryptoWidget;
