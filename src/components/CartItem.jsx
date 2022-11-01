import React from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeItems(id));
    toast.error("Item removed", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
    });
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
            <button className="checkout">checkout</button>
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
