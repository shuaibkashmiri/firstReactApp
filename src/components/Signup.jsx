import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "../styles/signup.scss"
import {Link} from "react-router-dom"
const Signup = () => {
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("");

    
    const url='https://app-back-end-nm7b.onrender.com';

      const handleSignup = async () => {
        try {
          // xml http post request
          const res = await axios.post(`${url}/user/signup`, {
            username,
            email,
            password,
          });
          if(res.data.msg === "User Registered Sucessfully"){
            toast.success(res.data.msg);
          }else{
            toast.error(res.data.msg)
          }
          
        } catch (error) {
          console.log(error.message);
          toast.error(error.msg)
        }
      };
    
function handleClick(){
    handleSignup()
}

  return (
    <>
      <ToastContainer />

<div className='signup-outer'>

  <div className="signup">
  <h1>Register With Us </h1>
  <input

 
            placeholder="Enter your username "
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            placeholder="Enter your Email "
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            placeholder="Enter your password "
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

        <button onClick={handleClick}> Register</button>
        <span>Already a user <Link to="/login" className='link'>click here to login</Link></span>
  </div>


</div>
       
        
    </>
  )
}

export default Signup