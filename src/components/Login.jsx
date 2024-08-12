import axios from 'axios'
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {useNavigate}  from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import ("../styles/login.scss");


const Login = () => {
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const navigate = useNavigate()

    
    const url ="https://app-back-end-nm7b.onrender.com"
    const credentials={email,password}

    const handleLogin = async ()=>{
        try {
            const res =await axios.post(`${url}/user/login`,credentials)
        if(res.data.message==="user loggin success"){
            toast.success("Logged In Successfully");
            navigate("/dashboard")
            
        }else{
            toast.error(res.data.message)
        }
        const {token}=res.data;
        localStorage.setItem("token",token);
        
            
        } catch (error) {
            console.log(error)      
        }
    }
        

    function clickHandler(){
        handleLogin();
        
    }

    
  return (
    <>
    <div className="login-outer">
    <ToastContainer/>
    <div className='login'>
        
        <h1>Login to Your Account</h1>
        <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Enter Password' value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button onClick={clickHandler}>Log In</button>

        <Link to="/signup" className='link'>Create New Account</Link>

    </div>
    </div>
   
    </>
    
  )
}

export default Login