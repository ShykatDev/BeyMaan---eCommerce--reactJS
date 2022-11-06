import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "../store/cartSlice";
import { checkoutItem, removeAllChekout } from "../store/checkoutSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ productDetails }) => {
  const cartItems = useSelector((state) => state.cart);
  const checkoutItems = useSelector((state) => state.checkout);

  const [activeBanner, setActiveBanner] = useState(productDetails.banner);

  const dispatch = useDispatch();

  const handleAddingCart = () => {
    dispatch(addItems(productDetails));
    toast.success("Item added", {
      position: "top-center",
      pauseOnHover: false,
      autoClose: 1000,
    });
  };

  const activeBannerChange = (image) => {
    setActiveBanner(image);
  };

  const addToCheckoutHandler = () => {
    if (checkoutItems.length === 0) {
      dispatch(checkoutItem(productDetails));
    } else {

      dispatch(removeAllChekout(productDetails));
      dispatch(checkoutItem(productDetails));
    }
  };

  return (
    <div className="perticularProduct">
      <h2>Product Details</h2>

      <div className="productDetails">
        <div className="mainBanner">
          <img src={activeBanner} alt="mainBanner" />
        </div>

        <div className="detailsSection">
          <h1>{productDetails.product_name}</h1>
          <button>Price: ${productDetails.product_price}</button>
          <h4>Details:</h4>
          <p>{productDetails.description}</p>
          <div className="button-group">
            <button
              className="addToCart-btn"
              onClick={() => {
                cartItems.includes(productDetails)
                  ? toast.warn("Product already added!")
                  : handleAddingCart();
              }}
            >
              <i class="lni lni-cart"></i> add to cart
            </button>
            <button className="buyNow-btn">
              <Link
                onClick={() => addToCheckoutHandler()}
                style={{ color: "White" }}
                to="/checkout"
              >
                Buy Now
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className="extraBanner">
        {productDetails.details_images.map((img) => (
          <img
            className="extraImg"
            src={img}
            alt="extra img"
            onClick={() => {
              activeBannerChange(img);
            }}
          ></img>
        ))}
      </div>
      <hr />
      <div className="reviews">
        <h2>
          Reviews{" "}
          <span className="reviewCount">
            ( {productDetails.ratings.length} )
          </span>
        </h2>
        <h2 className="rating">
          Ratings:{" "}
          <span>
            {productDetails.total_ratings} <i class="lni lni-star-filled"></i>
          </span>
        </h2>
      </div>

      <div className="comments">
        {productDetails.ratings.map((rating, index) => (
          <div>
            <div className="reviewTitle">
              <h3 className="ratingStar">
                {rating} <i class="lni lni-star-filled"></i>
              </h3>
              <h3>{productDetails.reviews[index]}</h3>
            </div>
            <div className="reviewComment">
              <p>{productDetails.comments[index]}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="FAQ">
        <h2>FAQ</h2>
        {productDetails.faq_question.map((faq, index) => (
          <div>
            <h3 className="question">{faq}</h3>
            <p className="answer">{productDetails.faq_answer[index]}</p>
          </div>
        ))}
      </div>

      <div className="backToShop">
        <Link className="backShop" to="/shop">
          Back to Shop
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
