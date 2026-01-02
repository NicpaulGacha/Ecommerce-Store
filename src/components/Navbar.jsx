import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
         fixed top-0 left-0 w-full z-50
  bg-gradient-to-b from-black/90 to-black/60
  backdrop-blur-md border-b border-yellow-500/20
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#home"
          className="text-2xl font-light tracking-wide text-white"
        >
          LUXE<span className="text-yellow-400">STORE</span>
        </a>

        {/* DESKTOP MENU */}
        <ul>
          <li className="hidden md:flex items-center gap-10 text-sm">
            <Link
              to="/home"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              <div className="relative group">
                {/* Parent link */}
                <button className="flex items-center gap-1 text-gray-200 hover:text-yellow-400 transition">
                  Home
                  <svg
                    className="w-4 h-4 mt-0.5 group-hover:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 top-full mt-3 w-48 rounded-xl bg-black/90 backdrop-blur-md shadow-xl border border-yellow-500/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <ul className="py-2 text-sm">
                    {[
                      { label: "Home", href: "/#home" },
                      { label: "Brand", href: "/#brand" },
                      { label: "About", href: "/#about" },
                      { label: "Reviews", href: "/#reviews" },
                    ].map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/5 transition"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              Shop
            </Link>
            <CartIcon />
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="text-white md:hidden text-3xl hover:border-yellow-500 transition"
        >
          <HiMenuAlt4 />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="
              absolute top-0 right-0 w-64 bg-black/90  backdrop-blur-xl 
              border-l border-gray-800 
              p-6 md:hidden flex flex-col z-[999]
            "
          >
            <button
              onClick={() => setOpen(false)}
              className="text-white text-3xl mb-10 self-end  hover:border-yellow-500 transition"
            >
              <HiX />
            </button>

            <ul className="space-y-6 text-lg">
              {["Home", "Shop", "Blog", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    onClick={() => setOpen(false)}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-yellow-500  transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/shop"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              Shop
            </Link>
            <CartIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
