import React, { useEffect, useState } from 'react'
import Authorized from '../auth/Authorized'
import axios from 'axios'
import "../styles/dashboard.scss"

const Dashboard = () => {

  
  Authorized()
  const [name ,setName]=useState("")
  const _id=localStorage.getItem("id")
  const url="https://app-back-end-nm7b.onrender.com/user/userdetails/"


  const getUserDetails =async(_id)=>{
    const res = await axios.get(`${url}${_id}`)
    setName(res.data.message.userdetails.username)

  }


  useEffect(()=>{
    getUserDetails(_id)
  },[_id])
    

  return (
    <div className='dashboard'>
    <h1>Hello! {name} Welcome to Your Account Dashboard!</h1>
    </div>
  )
}

export default Dashboard