import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart, updateQty, totalPrice } = useCart();

  return (
    <section className="min-h-screen w-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-bold text-yellow-400 mb-10">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-4xl">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border-b border-gray-800 pb-4"
            >
              <img
                src={item.image}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="text-xl">{item.name}</h3>
                <p className="text-yellow-400">${item.price}</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateQty(item.id, item.qty - 1)}
                  className="px-3 border border-yellow-500"
                >
                  -
                </button>
                <span>{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, item.qty + 1)}
                  className="px-3 border border-yellow-500"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-right text-2xl mt-6">
            Total:{" "}
            <span className="text-yellow-400">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </section>
  );
}
