import React, { useEffect, useState } from 'react'

const Contact = () => {

  const [user,setUser]=useState([])
  const fetchData=async ()=>{
    try {
      const data =await fetch('http://localhost:4000/',{method:"GET"});
      const newdata=await data.json();
      setUser(newdata);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  })

  return (
    <div style={{minHeight:"90vh"}}>
      <p>Email : {user.email}</p>
    </div>
  )
}

export default Contact