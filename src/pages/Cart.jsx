import React from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="cartPage">
      <h2>Cart Items</h2>
      <div className="subTitle">
        <p>Hey #user#, here is your all cart items.</p>
        <span className="removeAll">remove all</span>
      </div>

      <CartItem />
      <CartItem />
      <CartItem />

      <div className="totalCart">
        <div className="subTotal">
          <div className="line"></div>
          <div className="totalPrice">
            <h5>Sub Total: </h5>
            <h5>$200</h5>
          </div>

          <button className="checkoutAll">
            <Link to='/checkout' className="checkBtn">Checkout All</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
