// App.tsx
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Nav from "./pages/Nav";
import { useState } from "react";
import { ShoppingProps } from "./types/Types";
import Footer from "./pages/Footer";
import SingleItemCard from "./components/singleItemComponents/SingleItemCard";
import Main from "./pages/Main";

function App() {
  const [cart, setCart] = useState<ShoppingProps[]>([]);
  const [counter, setCounter] = useState<number>(0);

  function handleCart(newItem: ShoppingProps) {
    const itemExits = cart.some((item) => item.id === newItem.id);

    if (itemExits) {
      const updateCart = cart.map((item) =>
        item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updateCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...newItem, quantity: 1 }]);
    }

    setCounter((prevCount) => prevCount + 1);
  }
  const loading = false;
  const products: ShoppingProps[] = [];
  return (
    <Router>
      <Nav counter={counter} />
      <Routes>
        <Route
          path="/"
          element={<HomePage handleCart={handleCart} cart={cart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              counter={counter}
              setCart={setCart}
              setCounter={setCounter}
            />
          }
        />
        <Route
          path="/item/:id"
          element={
            <SingleItemCard
              isSingleItemView={true}
              cart={cart}
              handleCart={handleCart}
            />
          }
        />
        <Route path="/home" element={<Main handleCart={handleCart} cart={cart} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
