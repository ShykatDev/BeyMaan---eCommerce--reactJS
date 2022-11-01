import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItemsLength = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          Bey<span>Maan</span>
        </h1>
      </div>
      <div className="linkItems">
        <div className="menu">
          <NavLink to="/" className="navLinks">
            Home
          </NavLink>
          <NavLink to="shop" className="navLinks">
            Shop
          </NavLink>
          <NavLink to="contact" className="navLinks">
            Contact
          </NavLink>
          <NavLink to="faq" className="navLinks">
            FAQ
          </NavLink>
        </div>
        <div className="other">
          <div className="otherItem">
            <i className="lni lni-user"></i>
            <p>User</p>
          </div>
          <NavLink to="cart" className="otherItem">
            <i className="lni lni-cart"></i>
            <p className="cartItem">{cartItemsLength.length}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
