import { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Stat from "../components/Stat";
import AllTools from "../components/AllTools";

const Home = ()=> {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navbar cartCount={cart.length}/>
      <Banner />
      <Stat />
      <AllTools cart={cart} setCart={setCart} />
    </div>
  );
};

export default Home;