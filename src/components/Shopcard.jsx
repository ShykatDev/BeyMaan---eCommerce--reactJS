import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Shopcard = ({ product, setProductDetails }) => {
  // const [pdct, setPdct] = useState([]);

  const productDetailsClicked = () => {
    setProductDetails(product);
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="shopCard"
    >
      <div className="product__img">
        <img src={product.banner} alt="" />
      </div>
      <p>{product.product_name}</p>
      <div className="details__sec">
        <button>Price: ${product.product_price}</button>
        <Link
          to="/product"
          onClick={() => productDetailsClicked()}
          className="more"
        >
          details
        </Link>
      </div>
      <div className="addTo">
        <p>
          <i class="lni lni-cart"></i> add to cart
        </p>
      </div>
    </motion.div>
  );
};

export default Shopcard;
