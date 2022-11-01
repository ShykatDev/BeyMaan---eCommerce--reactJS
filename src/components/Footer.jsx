import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="rights">
            <small>© 2022, Shykat Raha, All rights reserved </small>
        </div>
      <div className="section__1">
        <div className="FooterLogo">
          <h2>
            Bey<span>Maan</span>
          </h2>
          <div className="footer_Title">
            <p>One place to get all</p>
          </div>
          <div className="socials">
            <i class="lni lni-facebook"></i>
            <i class="lni lni-instagram"></i>
            <i class="lni lni-twitter"></i>
          </div>
        </div>
      </div>
      <div className="section__2">
        <div className="secTitle">
          <h3>Items</h3>
        </div>
        <div className="footerMenu">
          <Link className="footerItem" to="/shop">Men</Link>
          <Link className="footerItem" to="/shop">Women</Link>
          <Link className="footerItem" to="/shop">Wearable</Link>
        </div>
      </div>
      <div className="section__3">
        <div className="secTitle">
          <h3>Support</h3>
        </div>
        <div className="footerMenu">
          <Link className="footerItem" to="/contact">Contact Us</Link>
          <Link className="footerItem" to="/faq">FAQ</Link>
        </div>
      </div>
      <div className="section__4">
        <div className="secTitle">
          <h3>About Us</h3>
        </div>
        <div className="footerMenu">
          <p className="footerItem">
            <i class="lni lni-map-marker"></i> Dhaka, Bangladesh
          </p>
          <p className="footerItem">
            <i class="lni lni-envelope"></i> beymaan.stylish@email.xyz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
