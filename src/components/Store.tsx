import React from "react";
import { StoreItems } from "../data/items";
import { Row } from "react-bootstrap";
import StoreItem from "./StoreItem";

const Store = () => {
  return (
    <>
      <div style={{ color: "black", fontSize: "2.5rem", margin: "auto 20px " }}>
        STORE
      </div>
      <Row md={2} xs={1} lg={3} className="gap-3 d-flex justify-content-center">
        {StoreItems.map((item) => (
          <StoreItem
            key={item.id}
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
