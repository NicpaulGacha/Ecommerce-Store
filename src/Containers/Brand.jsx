import { motion } from "framer-motion";
import {
  FaApple,
  FaAmazon,
  FaGoogle,
  FaMicrosoft,
  FaShopify,
} from "react-icons/fa";

export default function TrustedBrands() {
  const icons = [
    { name: "Apple", icon: <FaApple /> },
    { name: "Amazon", icon: <FaAmazon /> },
    { name: "Google", icon: <FaGoogle /> },
    { name: "Microsoft", icon: <FaMicrosoft /> },
    { name: "Shopify", icon: <FaShopify /> },
  ];

  return (
    <section className="w-full bg-black text-white" id="brand">
      {/* GOLDEN DIVIDER */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent mb-10"></div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl md:text-4xl font-semibold mb-12"
      >
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          {" "}
          Trusted By Leading Brands
        </span>
      </motion.h2>

      <div className="flex flex-wrap gap-12 justify-center items-center opacity-80">
        {icons.map((b, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2, rotate: 3, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-5xl md:text-6xl text-gray-400 hover:text-yellow-500 cursor-pointer"
            title={b.name}
          >
            {b.icon}
          </motion.div>
        ))}
      </div>

      {/* GOLDEN DIVIDER */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-600/60 to-transparent mt-14"></div>
    </section>
  );
}
