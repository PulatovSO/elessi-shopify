import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Collections from "./pages/Collections";
import Product from "./pages/Product";
import { LikeProvider } from "./context/LikeContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <LikeProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<Product />} />
          </Routes>
        </CartProvider>
      </LikeProvider>
    </div>
  );
}

export default App;
