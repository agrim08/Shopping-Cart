import { useShoppingCart } from "../context/ShoppingCartContext";
import { StoreItems } from "../data/items";
import { Button, Stack } from "react-bootstrap";
import { FormatCurrency } from "../utils/FormatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItems = ({ id, quantity }: CartItemProps) => {
  const { cartItems, removeFromCart } = useShoppingCart();
  const item = StoreItems.find((i) => i.id === id);
  if (!item) return null;

  return (
    <Stack direction="horizontal" gap={3} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="image"
        style={{
          height: "75px",
          width: "125px",
          objectFit: "cover",
        }}
      />
      <div className="me-auto fs-5">
        <div>
          {item.name}
          {quantity && (
            <span className="text-muted" style={{ fontSize: ".9rem" }}>
              X{quantity}
            </span>
          )}
        </div>
      </div>
      <div className="text-muted" style={{ fontSize: "0.95rem" }}>
        {FormatCurrency(item.price)}
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItems;
