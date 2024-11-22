import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItems from "./CartItems";
import { FormatCurrency } from "../utils/FormatCurrency";
import { StoreItems } from "../data/items";

type ShoppingCartProps = {
  isCartOpen: boolean;
};

const ShoppingCart = ({ isCartOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas
      show={isCartOpen}
      onHide={closeCart}
      placement="end"
      style={{
        width: "550px",
      }}
    >
      <Offcanvas.Header>
        <Offcanvas.Title>CART ITEMS</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = StoreItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
