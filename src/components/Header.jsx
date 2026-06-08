import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <img src={logo} alt="Planet logo" className="header-logo" />
      </div>
    </header>
  );
};

export default Header;
