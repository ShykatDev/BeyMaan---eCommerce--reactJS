import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const checkoutItems = useSelector((state) => state.checkout);

  const totalAmount = checkoutItems.map((item) => item.product_price);

  //Calculate the subtotal value
  let subTotal = 0;
  const shippingCost = 7;
  const tax = 10;
  for (let i = 0; i < totalAmount.length; i++) {
    subTotal += totalAmount[i];
  }
  return (
    <div className="checkoutPage">
      <h2>Checkout</h2>
      <p>One step more to confirm your order!</p>
      <div className="detailing-section">
        <div className="order-section">
          <small>Total Product: {checkoutItems.length}</small>
          <h3>Total Price : ${subTotal + tax + shippingCost}.00</h3>
          <img src="/images/checkout.jpg" alt="" />
        </div>

        <div className="purchase-form">
          <h3>Order Details</h3>
          <form action="">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" required />
            <label htmlFor="adress">Address</label>
            <input type="text" id="adress" required />
            <label htmlFor="zip">Zip</label>
            <input type="number" id="zip" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
            <hr />
            <div className="card-images">
              <img src="/images/visa.png" alt="" />
              <img src="/images/master.png" alt="" />
              <img src="/images/gpay.webp" alt="" />
            </div>
            <label htmlFor="cardName">Name on Card</label>
            <input type="text" id="cardName" required />
            <label htmlFor="cardInfo">Card Information</label>
            <input
              type="number"
              id="cardInfo"
              required
              placeholder="Card Number"
            />
            <div className="input-group">
              <input type="text" required placeholder="MM/YY" />
              <input type="number" required placeholder="CVV" />
            </div>

            <button type="submit" className="purchase">
              Pay ${subTotal + tax + shippingCost}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
