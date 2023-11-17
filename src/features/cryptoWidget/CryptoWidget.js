import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CryptoWidget = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="item">
      <div className="display-container">
        <div className="name">{props.crypto.symbol}</div>
      </div>
      <div className="display-container btn-container">
        <button>See Details</button>
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
