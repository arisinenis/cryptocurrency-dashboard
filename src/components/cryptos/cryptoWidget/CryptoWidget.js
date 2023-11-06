import React from "react";

const CryptoWidget = (props) => {
  return (
    <div className="item">
      <div className="display-container">
        <div className="name">{props.symbol}</div>
      </div>
      <div className="price-container">
        <div className="price">{props.lastPrice}</div>
        <div
          className={`price-change ${
            parseInt(props.priceChangePercent) < 0 ? "danger" : "success"
          }`}
        >
          {props.priceChangePercent && `${props.priceChangePercent}%`}
        </div>
      </div>
    </div>
  );
};

export default CryptoWidget;
//