import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">dashboard</Link>
      <Link to="/services">services</Link>
      <Link to="/content">content</Link>
    </nav>
  );
};

export default Header;
