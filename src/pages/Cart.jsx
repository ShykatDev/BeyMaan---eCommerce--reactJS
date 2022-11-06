import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "../store/cartSlice";
import { checkoutItem, removeAllChekout } from "../store/checkoutSlice";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const checkoutItems = useSelector((state) => state.checkout);

  const totalAmount = cartItems.map((item) => item.product_price);

  //Calculate the subtotal value
  let subTotal = 0;
  const shippingCost = 7;
  const tax = 10;
  for (let i = 0; i < totalAmount.length; i++) {
    subTotal += totalAmount[i];
  }

  const removeAllItems = () => {
    if (cartItems.length !== 0) {
      dispatch(removeAll());
      toast.error("All item removed", {
        position: "top-center",
        pauseOnHover: false,
        autoClose: 1000,
      });
    }else{
      toast.error("Cart has already empty", {
        position: "top-center",
        pauseOnHover: false,
        autoClose: 1000,
      });
    }
  };

  const allCheckoutItemsHandler = () => {
    dispatch(removeAllChekout());
    cartItems.map((item) => dispatch(checkoutItem(item)));
  };

  return (
    <>
      <div className="cartPage">
        <h2>Cart Items</h2>
        <div className="subTitle">
          {cartItems.length === 0 ? (
            <i style={{ color: "red" }}>No item found</i>
          ) : (
            <p>Hey #user, here is your all cart items.</p>
          )}

          <span className="removeAll" onClick={() => removeAllItems()}>
            remove all
          </span>
        </div>

        {cartItems.map((cartItem) => (
          <CartItem item={cartItem} />
        ))}

        <div className="totalCart">
          <div className="subTotal">
            <div className="line"></div>
            <div className="totalPrice">
              <p>Tax: </p>
              <p>${cartItems.length === 0 ? 0 : `${tax}`}.00</p>
            </div>
            <div className="totalPrice">
              <p>Shipping Cose: </p>
              <p>${cartItems.length === 0 ? 0 : `${shippingCost}`}.00</p>
            </div>
            <div className="totalPrice">
              <h5>Sub Total: </h5>
              <h5>
                $
                {cartItems.length === 0
                  ? 0
                  : `${subTotal + tax + shippingCost}`}
                .00
              </h5>
            </div>

            <button className="checkoutAll">
              <Link
                onClick={() => allCheckoutItemsHandler()}
                to={cartItems.length === 0 ? "" : "/checkout"}
                className="checkBtn"
              >
                Checkout All
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <ToastContainer />
    </>
  );
};

export default Cart;
