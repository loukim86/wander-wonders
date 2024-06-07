import Routers from "../../routers/Routers";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import About from "../About/About";
import Home from "../Home/Home";
import Popular from "../Popular/Popular";
import Offer from "../Offers/Offer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular />
      <Offer />
      <About />
      <Blog />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
