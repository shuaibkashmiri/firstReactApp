import React, { useEffect, useState } from "react";
import "../styles/Navbar.scss";
import {Link, useNavigate} from "react-router-dom"
import logo from "../images/logo.png"
import { IoMdMenu  } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { LiaFemaleSolid, LiaMaleSolid } from "react-icons/lia";
import { PiGridFour } from "react-icons/pi";
import api from "../utils/AxiosInstance";
import Cookies from "js-cookie";

const Navbar = (props) => {
const [menuData, setMenuData]=useState(false);
const [showSetting,setShowSettings]=useState(false);
const [dropDown, setDropDown]=useState(false)
const [user,setUser]=useState("")
const navigate = useNavigate()


const handleLogout=()=>{
  setShowSettings(false);
  setDropDown(false)
  Cookies.remove("token")
  setUser("");
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

const getUserData=async()=>{
  try {
    const res =await api.get("/user/userdetails");
    setUser(res.data.message.userdetails.email)
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{

    getUserData()
  
   
},[props.change])


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
                <Link to="/contact"> Men</Link>
              </li>
              <li>
                <Link to="/about"> Women</Link>
              </li>
    
            </ul>
          </div>
        
    {/* logo */}
      <Link to="/" className="homelink"><img src={logo} alt="LOGO" className="logo" /></Link>  
      
      {/* ul */}
      <ul>
        <li>
          <Link to="/"> <AiOutlineHome/> Home</Link>
        </li>
        <li>
          <Link to="/contact"><LiaMaleSolid/> Men</Link>
        </li>
        <li>
          <Link to="/blogs"><LiaFemaleSolid /> Women</Link>
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
