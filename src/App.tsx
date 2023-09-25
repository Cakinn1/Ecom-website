import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Nav from "./pages/Nav";
import { useEffect, useState } from "react";
import { ShoppingProps } from "./types/Types";
import Footer from "./pages/Footer";
import SingleItemCard from "./components/singleItemComponents/SingleItemCard";
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Auth from "./pages/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/Firebase";

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user?.email);
    });
  }, []);

  return (
    <Router>
      <Nav counter={counter}  cart={cart}/>
      <Routes>
        <Route
          path="/Shopping"
          element={<HomePage handleCart={handleCart} cart={cart} />}
        />
        <Route
          path="/Shopping/Item/cart"
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
          path="/Shopping/Item/:id"
          element={
            <SingleItemCard
              isSingleItemView={true}
              cart={cart}
              handleCart={handleCart}
            />
          }
        />
        <Route
          path="/"
          element={<Main handleCart={handleCart} cart={cart} />}
        />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/my-account" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
