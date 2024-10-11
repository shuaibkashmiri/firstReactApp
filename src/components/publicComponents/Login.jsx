import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {useNavigate}  from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import api from '../../utils/AxiosInstance';
import ("../styles/login.scss");


const Login = (props) => {
    const [email , setEmail]=useState("")
    const [password , setPassword]=useState("")
    const navigate = useNavigate()

    const formData={email,password}

    const handleLogin = async ()=>{
        try {
            const res =await api.post(`/user/login`,formData)
        if(res.data.message==="user loggin success"){
            toast.success("Logged In Successfully");
            props.setChange(!props.change)
            navigate("/")
        }else{
            toast.error(res.data.message)
        }
      
        
            
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
        <input type="email" placeholder='Enter Registered Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Enter Your Password' value={password} 
        onChange={(e)=>{setPassword(e.target.value)}}
        />
        <button onClick={clickHandler}>Log In</button>

        <span><Link to="/signup" className='link'>Create New Account</Link></span>

    </div>
    </div>
   
    </>
    
  )
}

export default Login