import React, { useEffect, useState } from "react";
import Shopcard from "../components/Shopcard";
import productData from "../Data/products.json";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const Shop = ({ setProductDetails }) => {
  //States
  const [filteredProduct, setFilterdProduct] = useState(productData);
  const [productType, setProductType] = useState("all");

  useEffect(() => {
    if (productType === "all") {
      setFilterdProduct(productData);
      return;
    }

    const filtered = productData.filter((p) => p.type.includes(productType));
    setFilterdProduct(filtered);
  }, [productType]);

  return (
    <>
      <div className="shopPage">
        <h2>All Products</h2>

        <div className="shop_products">
          <div className="filter__section">
            <div className="sec_title">
              <h3
                className={productType === "all" ? "activeFilter" : ""}
                onClick={() => setProductType("all")}
              >
                All
              </h3>
              <h3
                className={productType === "men" ? "activeFilter" : ""}
                onClick={() => setProductType("men")}
              >
                Men
              </h3>
            </div>
            <ul>
              <li>Shirt</li>
              <li>Jacket</li>
              <li>Jeans</li>
              <li>Shoes</li>
            </ul>
            <div className="sec_title">
              <h3
                className={productType === "women" ? "activeFilter" : ""}
                onClick={() => setProductType("women")}
              >
                Women
              </h3>
            </div>
            <ul>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Shoes</li>
            </ul>
            <div className="sec_title">
              <h3
                className={productType === "wearable" ? "activeFilter" : ""}
                onClick={() => setProductType("wearable")}
              >
                Wearable
              </h3>
            </div>
            <ul>
              <li>Cap</li>
              <li>Glasses</li>
            </ul>
          </div>
          <motion.div layout className="filter__products">
            <AnimatePresence>
              {filteredProduct.map((product) => {
                return (
                  <Shopcard
                    product={product}
                    setProductDetails={setProductDetails}
                    key={product.id}
                  />
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
