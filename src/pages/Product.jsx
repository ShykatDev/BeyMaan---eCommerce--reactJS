import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Product = ({ productDetails }) => {
  const [activeBanner, setActiveBanner] = useState(productDetails.banner);

  const activeBannerChange = (image) => {
    setActiveBanner(image);
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
          <p>{productDetails.description}</p>
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
        <h2>Reviews</h2>
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
    </div>
  );
};

export default Product;
