import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Stat from "../components/Stat";
import AllTools from "../components/AllTools";
import Steps from "../components/Steps";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import {toast} from "react-toastify";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products");

  const addToCart = (product) => {
    const alreadyExists = cart.find(item => item.id === product.id);

    if (alreadyExists) return;

    setCart([...cart, product]);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Item removed");
  };

  return (
    <div>
      <Navbar cartCount={cart.length} />

      <Banner />
      <Stat />

      <AllTools
        cart={cart}
        view={view}
        setView={setView}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />

      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;