import React, { useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import featuredData from "../Data/featured_products.json";

const Home = () => {
  const [banner, setBannner] = useState("/images/banner1.png");
  const [isActive1, setisActive1] = useState(true);
  const [isActive2, setisActive2] = useState(false);

  //funnctions
  const banner1 = () => {
    const ban = "/images/banner1.png";
    setBannner(ban);
    setisActive1(!isActive1);
    setisActive2(!isActive2);
  };

  const banner2 = () => {
    const ban = "/images/banner2.png";
    setBannner(ban);
    setisActive1(!isActive1);
    setisActive2(!isActive2);
  };

  return (
    <div className="homePage">
      {/* First section */}
      <div className="carousel">
        <img src={banner} alt="banner1" className="banner" />
      </div>

      <div className="showcase">
        <div
          className={isActive1 ? "case case1 active" : "case case1"}
          onClick={banner1}
        >
          <img src="/images/banner1.png" alt="" />
        </div>
        <div className={isActive2 ? "case case2 active" : "case case2"}>
          <img src="/images/banner2.png" alt="" onClick={banner2} />
        </div>
      </div>

      {/* second section */}
      <div className="featured__products" id="featured__products">
        <h2>Featured Products</h2>

        <div className="cards">
          {featuredData.map((product) => (
            <Card
              pdct_name={product.product_name}
              pdct_banner={product.banner}
              pdct_price={product.product_price}
              key={product.id}
            />
          ))}
        </div>
      </div>

      {/* Third section */}
      <div className="highlight">
        <div className="item">
          <div className="overLayer"></div>
          <img src="/images/allFashion.jpg" alt="" />
          <p>All fashion in one place</p>
        </div>
        <div className="item">
          <div className="overLayer"></div>
          <img src="/images/mastercard.jpg" alt="" />
          <p>Easy Shopping, Fast Delivery</p>
        </div>
        <div className="item">
          <div className="overLayer"></div>
          <img src="/images/fashion.jpg" alt="" />
          <p>Latest and Trend Collections</p>
        </div>
        <div className="item">
          <div className="overLayer"></div>
          <img src="/images/return.jpg" alt="" />
          <p>Easy Return Policy</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
