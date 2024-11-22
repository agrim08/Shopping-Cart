import React from "react";
import { StoreItems } from "../data/items";
import { Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="gap-3 d-flex justify-content-center">
        {StoreItems.map((item) => (
          <StoreItem
            id={item.id}
            name={item.name}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        ))}
      </Row>
    </>
  );
};

export default Store;
