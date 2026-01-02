import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import MiniCart from "./components/MiniCart";
import { CartProvider } from "./context/CartContext";
import Shop from "./pages/Shop";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className=" bg-black text-gray-800">
          <Navbar />
          <MiniCart />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}
