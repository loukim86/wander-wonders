import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Products from "../pages/Products";
import Blog from "../pages/Blog";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Explore from "../pages/Explore";
import Travel from "../pages/Travel";
import ReadMore from "../pages/ReadMore";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/travel" element={<Travel />} />
      <Route path="/read-more" element={<ReadMore />} />
    </Routes>
  );
};

export default Routers;
