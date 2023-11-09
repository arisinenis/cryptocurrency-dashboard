import React from "react";

const CryptoWidget = (props) => {
  return (
    <div className="item">
      <div className="display-container">
        <div className="name">{props.crypto.symbol}</div>
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
