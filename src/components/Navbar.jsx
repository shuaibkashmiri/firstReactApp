import React from "react";
import "../styles/Navbar.scss";
import {Link} from "react-router-dom"
import logo from "../images/logo.png"
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar">

    <IoMdMenu className="menu" />
    {/* logo */}
      <Link to="/"><img src={logo} alt="LOGO" className="logo" /></Link>  
      
      {/* ul */}
      <ul>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
        <li>
          <Link to="/blogs"> Blogs</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        
      </ul>

      {/* buttons */}
      <div className="reg">
        <button className="signup"><Link to="/signup"> Sign Up</Link></button>
          
        <button className="login"><Link to="/login"> Login</Link></button>
        
      </div>
    </div>
  );
};

export default Navbar;
