import axios from 'axios';
import React, { useState } from 'react'

const Signup = () => {
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("l")
    const [password, setPassword]=useState("");

    const formDataArr=new FormData();
    formDataArr.append("username",username);
    formDataArr.append("email",email);
    formDataArr.append("password",password);

    const url='http://localhost:4000/';

    const handleSignUp=async()=>{
        try {
            const data =await axios.post(`${url}signUp`,formDataArr)
        console.log(data.msg)
        } catch (error) {
            console.log('Something Wrong')
        }
    }
function handleClick(){
    handleSignUp()
}

  return (
    <div>
       
        <input type="text" placeholder='enter Username' onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="email" placeholder='enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
       
        <button onClick={handleClick}>Sign up</button>
    </div>
  )
}

export default Signup