import { motion } from "framer-motion";
import wacth1 from "../Assets/watches/watch1.jpg";
import wacth2 from "../Assets/watches/watch2.jpg";
import wacth3 from "../Assets/watches/watch3.jpg";
import { useCart } from "../context/CartContext";

export default function Features() {
  const { addToCart } = useCart();
  const products = [
    {
      name: "Aurelius Gold Edition",
      price: "$899",
      img: wacth1,
      category: "Luxury",
    },
    {
      name: "Noir Classic Steel",
      price: "$749",
      img: wacth2,
      category: "Men’s Collection",
    },
    {
      name: "Celeste Rose Gold",
      price: "$699",
      img: wacth3,
      category: "Women’s Collection",
    },
  ];

  return (
    <section id="features" className="bg-black text-white px-8 md:px-20 py-24">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        Featured
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          {" "}
          Pieces
        </span>
      </motion.h2>

      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 mx-auto mt-4 rounded-full"></div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-10 mt-16">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-black rounded-2xl p-6 border border-yellow-600/20 shadow-xl hover:shadow-yellow-500/20 transition-all duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <motion.img
                src={product.img}
                alt={product.name}
                className="w-full h-72 object-cover rounded-xl brightness-75 "
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Text Content */}
            <h3 className="mt-6 text-xl font-semibold">{product.name}</h3>
            <p className="text-yellow-500 text-sm mt-1">{product.category}</p>

            <div className="mt-4 flex justify-between items-center">
              <span className="text-2xl font-bold">{product.price}</span>

              <button
                onClick={() => addToCart(product)}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
