import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div>
      <img
        className="img-container"
        src="static/images/logo.png"
        alt="Sabka Bazaar logo"
      />
    </div>

    <div className="header__links">
      <Link to="/">
        Home
      </Link>
      <Link to="/PLP">
        Products
      </Link>
    </div>
    <div className="header__cartIcon">
      <div className="header__options">
        <Link to="/login">Sign In</Link>
        <Link to="/register">Register</Link>
      </div>
      <div className="cartIcon">
          <div className="cartDisplayContent">
          <img src="static/images/cart.svg" alt="cartSvg" /> <span>0 items</span>

          </div>
      </div>
    </div>
  </div>
);

export default Header;
