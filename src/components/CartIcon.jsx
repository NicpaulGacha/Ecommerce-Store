import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { cartItems, setIsCartOpen } = useCart();

  return (
    <button
      onClick={() => setIsCartOpen(true)}
      className="relative text-yellow-400 hover:text-yellow-500 hover:border-yellow-500 transition"
    >
      <FaShoppingCart size={22} />
      {cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {cartItems.length}
        </span>
      )}
    </button>
  );
}
