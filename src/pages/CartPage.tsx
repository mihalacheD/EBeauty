import { useCart } from "../hooks/useCart";


const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, total } = useCart(); // Preiei datele din context

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.product.id}>
            <h3>{item.product.title}</h3>
            <p>Price: ${item.product.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}>
              Increase Quantity
            </button>
            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}>
              Decrease Quantity
            </button>
          </div>
        ))
      )}
      <div>
        <h3>Total: ${total}</h3>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
