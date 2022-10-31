import React from "react";
import { Link } from "react-router-dom";

const card = ({ pdct_name, pdct_banner, pdct_price }) => {
  return (
    <div className="card">
      <div className="product__img">
        <img src={pdct_banner} alt="" />
      </div>
      <p>{pdct_name}</p>
      <div className="details__sec">
        <button>Price: ${pdct_price}</button>
        <Link to="/shop" className="more">
          more
        </Link>
      </div>
    </div>
  );
};

export default card;
