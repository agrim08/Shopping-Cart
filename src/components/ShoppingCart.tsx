import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
  isCartOpen: boolean;
};

const ShoppingCart = ({ isCartOpen }) => {
  const { closeCart } = useShoppingCart();
  return (
    <Offcanvas show={isCartOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title>CART ITEMS</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default ShoppingCart;
