import React, { useEffect } from 'react'
import Home from './sharedComponents/Home'
import profile from "../images/home_profile.png"

const Index = () => {
  useEffect(()=>{
    document.title="Home"
  })
  return (
   <>
   <Home heading={"Shoaib Mushtaq Bhat"} para={"Web Developer"} profile={profile}/>
   </>
  )
}

export default Index