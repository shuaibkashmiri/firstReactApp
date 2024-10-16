import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "../styles/signup.scss"
import {Link} from "react-router-dom"
import api from "../../utils/AxiosInstance"
const Signup = () => {
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("");

    

      const handleSignup = async () => {
        try {
          // xml http post request
          const res = await api.post(`/user/signup`, {
            username,
            email,
            password,
          });
          if(res.data.message === "User Registered Sucessfully"){
            console.log(res.data)
            toast.success(res.data.message);
          }else{
            toast.error(res.data.message)
          }
          
        } catch (error) {
          console.log(error.message);
          toast.error("Server Error")
        }
      };
    
function handleClick(){
    handleSignup()
}

  return (
    <>
      

<div className='signup-outer'>
<ToastContainer />

  <div className="signup">
  <h1>Register With Us </h1>
  <input

 
            placeholder="Enter Your Full Name "
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            placeholder="Enter Your Email "
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <input
            placeholder="Set Your Password"
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