import React, { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import {Link, useNavigate} from "react-router-dom"
import logo from "../images/logo.png"
import { IoMdMenu  } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import axios from "axios";

const Navbar = (props) => {
const [menuData, setMenuData]=useState(false);
const [showSetting,setShowSettings]=useState(false);
const [dropDown, setDropDown]=useState(false)
const [user,setUser]=useState("")
const navigate = useNavigate()


const handleLogout=()=>{
  setShowSettings(false);
  setDropDown(false)
  localStorage.removeItem("id");
  localStorage.removeItem("token");
  setUser("")

  navigate("/")


}

function toggleDropDown(){
  setDropDown(!dropDown)
}
const toggleSetting=()=>{
  setShowSettings(!showSetting);
}


const toggleMenu =()=>{
  setMenuData(!menuData)
}

const id =localStorage.getItem("id")
const url= `https://app-back-end-nm7b.onrender.com/user/userdetails/${id}`;
const getUserData=async()=>{
  try {
    const res =await axios.get(url);
    setUser(res.data.message.userdetails.email)
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{

    getUserData()
  
   
},[props.change,id])


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
      <Link to="/" className="homelink"><img src={logo} alt="LOGO" className="logo" /></Link>  
      
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

      <div>
        {user?<div  className="userlogo">
      <div className="userprofile">
        <img src="" alt="img" />
      </div>
      <p>{user}</p>

       <IoIosArrowDropdown onClick={toggleDropDown}/>
      
          
      </div>:<div className="reg">
        <button className="signup"><Link to="/signup"> Sign Up</Link></button>
          
        <button className="login"><Link to="/login"> Login</Link></button>
        
      </div>}
      </div>

     

      {/* buttons */}
      
      <div>
{user ? <BsThreeDotsVertical className="dots" onClick={toggleSetting}/>:<Link  to={"/login"} className="login-menu">Login</Link>}

</div>
      
    </div>
    <div className={showSetting ? "settings" : "display-none"}>
 <ul>
  <li>{user}</li>
  <li>Edit Profile</li>
  <hr />
  <li>Settings</li>
  <li onClick={handleLogout}>Log-Out</li>
 </ul>

</div>  

<div className={dropDown?"dropdownmenu":"display-none"}>
   <ul>
    <li>Setting</li>
    <li>Edit Profile</li>
    <hr />
    <li onClick={handleLogout}>Log-Out</li>
   </ul>
       </div>
    </>    
  );
};

export default Navbar;
