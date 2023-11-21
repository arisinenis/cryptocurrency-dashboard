import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedCryptoInfos } from "../cryptoLists/cryptoListSlice";
import {
  Card,
  CardHeader,
  CardTitle,
  CardText,
  CardBody,
  Button,
} from "reactstrap";

const CryptoDetail = () => {
  const dispatch = useDispatch();
  const cryptoParameter = useSelector(
    (state) => state.allCryptos.cryptoParameter
  );

  useEffect(() => {
    dispatch(getRelatedCryptoInfos(cryptoParameter));
  });

  const pair = useSelector((state) => state.allCryptos.cryptoPair);

  return (
    <Card
      className="my-2"
      style={{
        width: "18rem",
      }}
    >
      <CardHeader>{pair.symbol}</CardHeader>
      <CardBody>
        <CardTitle tag="h5">{pair.lastPrice}</CardTitle>
        <CardText
          className={`price-change ${
            parseInt(pair.priceChangePercent) < 0 ? "danger" : "success"
          }`}
        >
          {pair.priceChangePercent && `${pair.priceChangePercent}%`}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CryptoDetail;
