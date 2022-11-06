import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../store/cartSlice";
import { checkoutItem, removeCheckoutItem } from "../store/checkoutSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const checkoutItems = useSelector((state) => state.checkout);

  const removeFromCart = (id) => {
    dispatch(removeItems(id));
    toast.error("Item removed", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
    });
  };

  const addToCheckoutHandler = () => {
    if (checkoutItems.length === 0) {
      dispatch(checkoutItem(item));
    } else {
      dispatch(removeCheckoutItem(item));
      dispatch(checkoutItem(item));
    }
  };

  return (
    <div className="cartItems">
      <div className="item">
        <div className="detailsCol">
          <div className="imgCol">
            <img src={item.banner} alt="" />
          </div>
          <div className="details">
            <h4>{item.product_name}</h4>
            <div className="description">
              <p>{item.description}</p>
            </div>
          </div>
        </div>
        <div className="quantityCol">
          <h4>Price: ${item.product_price}</h4>

          <div className="checkin">
            <button className="checkout">
              <Link onClick={() => addToCheckoutHandler()} to="/checkout">
                checkout
              </Link>
            </button>
            <button onClick={() => removeFromCart(item.id)} className="remove">
              remove
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartItem;
