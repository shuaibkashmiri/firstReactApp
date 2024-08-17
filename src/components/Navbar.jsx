import React, { useState } from "react";
import "../styles/Navbar.scss";
import {Link} from "react-router-dom"
import logo from "../images/logo.png"
import { IoMdMenu  } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
const [menuData, setMenuData]=useState(false);
const [showSetting,setShowSettings]=useState(false);
const [user,setUser]=useState(false)



const toggleSetting=()=>{
  setShowSettings(!showSetting);
}


const toggleMenu =()=>{
  setMenuData(!menuData)
}

  return (
    <>
    <div className="navbar">

    <IoMdMenu className="menu" onClick={toggleMenu}/>

    <div className={menuData ? "drop-down" : "display-none"} >
            <div className="close-btn"><IoClose onClick={toggleMenu} /></div>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/contact"> Contact</Link>
              </li>
              <li>
                <Link to="/about"> About</Link>
              </li>
              <li>
                <Link to="/blogs"> Blogs</Link>
              </li>
            </ul>
          </div>
        
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
      <div>
{user ? <BsThreeDotsVertical className="dots" onClick={toggleSetting}/>:<Link  to={"/login"} className="login-menu">Login</Link>}

</div>
      
    </div>
    <div className={showSetting ? "settings" : "display-none"}>
 <ul>
  <li>email</li>
  <li>lg</li>
  <hr />
  <li>settings</li>
  <li>edit profile</li>
 </ul>

</div>  
    </>    
  );
};

export default Navbar;
