import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Stat from "../components/Stat";
import AllTools from "../components/AllTools";
import Steps from "../components/Steps";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stat />
      <AllTools cart={cart} setCart={setCart} />
      <Steps />
      <Pricing />
      <Footer/>
    </div>
  );
};

export default Home;