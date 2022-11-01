import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/index.scss";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Product from "./pages/Product";
import ErrorPage from "./components/ErrorPage";
import Cart from "./pages/Cart";
import Checkout from "./components/Checkout";

function App() {
  //States
  const [productDetails, setProductDetails] = useState([]);

  // useEffect(() => {
  //   console.log(productDetails);
  // }, []);

  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/shop"
            element={<Shop setProductDetails={setProductDetails} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route
            path="/product"
            element={<Product productDetails={productDetails} />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>

          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
