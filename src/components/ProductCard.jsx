import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto"
      />
      <div>
        <h2 className="font-semibold mt-2 text-sm">{product.title}</h2>
        <p className="text-gray-500">${product.price}</p>
      </div>
      <div className="flex justify-between mt-4">
        <Link
          to={`/product/${product.id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          View
        </Link>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
