import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Shopcard = ({ product, setProductDetails }) => {
  const cartItems = useSelector((state) => state.cart);

  const productDetailsClicked = () => {
    setProductDetails(product);
  };

  const dispatch = useDispatch();

  const handleAddingCart = () => {
    dispatch(addItems(product));
    toast.success("Item added", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
    });
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
      <div
        className="addTo"
        onClick={() => {
          cartItems.includes(product)
            ? toast.warn("Item already exist")
            : handleAddingCart();
        }}
      >
        <p>
          <i class="lni lni-cart"></i> add to cart
        </p>
      </div>
      <ToastContainer />
    </motion.div>
  );
};

export default Shopcard;
