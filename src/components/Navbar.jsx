import React from "react";
import "../styles/Navbar.css";
import {Link} from "react-router-dom"
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/"><img src={logo} alt="LOGO" className="logo" /></Link>
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/Gallery"> Gallery</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
