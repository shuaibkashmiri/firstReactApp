import React, { useEffect, useState } from 'react'
import Authorized from '../auth/Authorized'
import "../styles/dashboard.scss"
import api from '../utils/AxiosInstance'


const Dashboard = (props) => {
  
  Authorized()
  
  
  const [name ,setName]=useState("")

  const getUserDetails =async()=>{
    try {
      const res = await api.get("/user/userdetails");
      
     
      setName(res.data.message.userdetails.username)
     
    } catch (error) {
      console.log(error)
    }
   

  }



  useEffect(()=>{
  
    getUserDetails()
  },[props.change,])
    

  return (

    <div className='dashboard'>
      {name? <h1>Hello! {name} Welcome to Your Account Dashboard!</h1>:""}
   
    </div>
  )
}

export default Dashboard