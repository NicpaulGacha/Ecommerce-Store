import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        ShopEasy
      </Link>
      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/cart" className="font-semibold">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}
