import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Bey<span>Maan</span>
        </h1>
      </div>
      <div className="linkItems">
        <div className="menu">
          <Link to="/" className="navLinks acive">
            Home
          </Link>
          <Link to="/shop" className="navLinks">
            Shop
          </Link>
          <Link to="/contact" className="navLinks">
            Contact
          </Link>
          <Link to="/faq" className="navLinks">
            FAQ
          </Link>
        </div>
        <div className="other">
          <div className="otherItem">
            <i className="lni lni-user"></i>
            <p>User</p>
          </div>
          <Link to='/cart' className="otherItem">
            <i className="lni lni-cart"></i>
            <p className="cartItem">0</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
