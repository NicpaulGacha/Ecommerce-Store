import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function MiniCart() {
  const {
    cartItems,
    removeFromCart,
    updateQty,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Cart Panel */}
          <motion.div
            className="fixed right-0 top-0 h-full w-[360px] bg-black z-50 p-6 border-l border-yellow-500/30"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Your Cart
            </h2>

            {cartItems.length === 0 && (
              <p className="text-gray-400">Your cart is empty.</p>
            )}

            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center border-b border-gray-800 pb-3"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <div className="flex-1">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-yellow-400">${item.price}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="px-2 border border-yellow-500"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="px-2 border border-yellow-500"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between text-lg mb-4">
                  <span>Total</span>
                  <span className="text-yellow-400">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>

                <Link
                  to="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="block text-center bg-yellow-500 text-black py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
                >
                  View Cart
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
