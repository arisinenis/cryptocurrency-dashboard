import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedCryptoInfos } from "../cryptoLists/cryptoListSlice";
import { Card, CardHeader, CardTitle, CardText, CardBody } from "reactstrap";

const cryptoDetail = () => {
  return (
    <Card
      className="my-2"
      style={{
        width: "18rem",
      }}
    >
      <CardHeader>Header</CardHeader>
      <CardBody>
        <CardTitle tag="h5">Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
        <Button>Go somewhere</Button>
      </CardBody>
    </Card>
  );
};

export default cryptoDetail;
