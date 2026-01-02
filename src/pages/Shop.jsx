import { watches } from "../data/watches";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Shop() {
  const { addToCart } = useCart();

  return (
    <section className="bg-black text-white py-20 px-6 w-screen" id="shop">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Shop <span className="text-yellow-500">Watches</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10  ">
        {watches.map((watch) => (
          <div
            key={watch.id}
            className="bg-[#111] rounded-2xl overflow-hidden border border-yellow-600/20
                       hover:shadow-yellow-600/30 hover:scale-[1.02] transition"
          >
            <img
              src={watch.image}
              alt={watch.name}
              className="h-64 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">{watch.name}</h3>
              <p className="text-sm text-gray-400">{watch.brand}</p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-500 font-bold text-lg">
                  ${watch.price}
                </span>
                <button
                  onClick={() => addToCart(watch)}
                  className="border border-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-500 hover:border-yellow-500 hover:text-black transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
