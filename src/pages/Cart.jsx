import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded"
              >
                <span>{item.title}</span>
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-semibold">Total: ${total}</p>
        </>
      )}
    </div>
  );
}
