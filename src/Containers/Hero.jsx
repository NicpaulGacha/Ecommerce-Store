import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroWatch from "../Assets/hero-watch.jpg";

export default function Hero() {
  return (
    <section className="relative w-screen min-w-full overflow-hidden h-screen flex items-center justify-center text-white">
      {/* Background with parallax zoom */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroWatch})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Timeless Elegance,
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            {" "}
            Crafted to Perfection.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mt-6 text-lg leading-relaxed"
        >
          Discover luxury watches designed with unmatched precision and crafted
          for those who appreciate true artisanship.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/shop"
            className="px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-yellow-500 to-yellow-700 text-black shadow-lg hover:scale-105 transition-transform hover:text-white transition"
          >
            Shop Now
          </Link>

          <a
            href="#features"
            className="px-8 py-3 rounded-full border border-yellow-500/50 text-yellow-400 bg-white/10 backdrop-blur hover:text-white hover:scale-105 transition-transform"
          >
            View Featured
          </a>
        </motion.div>
      </div>
    </section>
  );
}
