import React, { useEffect, useState } from 'react'
import Authorized from '../auth/Authorized'
import axios from 'axios'
import "../styles/dashboard.scss"

const Dashboard = () => {

  
  Authorized()
  const [name ,setName]=useState("")
  const id=localStorage.getItem("id")
  const url="https://app-back-end-nm7b.onrender.com/user/userdetails/"


  const getUserDetails =async()=>{
    try {
     
      const res = await axios.get(`${url}${id}`)
      setName(res.data.message.userdetails.username)
    } catch (error) {
      console.log(error)
    }
   

  }


  useEffect(()=>{
    
    
    getUserDetails()
    
    
  },[])
    

  return (
    <div className='dashboard'>
    <h1>Hello! {name} Welcome to Your Account Dashboard!</h1>
    </div>
  )
}

export default Dashboard