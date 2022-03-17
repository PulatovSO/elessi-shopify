import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Collections from "./pages/Collections";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/account" element={<Account />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
