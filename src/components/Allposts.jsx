import React, { useState } from 'react'
import Home from './sharedComponents/Home'
import "../styles/Allposts.scss"
import axios from 'axios';
import Authorized from '../auth/Authorized';

const Allposts = () => {
    Authorized()
const [posts,setPosts]=useState([]);

const url="https://localhost:4000/post/getAll/"
const token=localStorage.getItem("token");

const getAllPosts=async ()=>{

    try {
        const res = await fetch(`${url}${token}`);
        const newData=await res.json()
        console.log(newData)    
    } catch (error) {
        console.log(error)
    }
    
}

getAllPosts()

  return (
<>
<Home/>
<div className="posts">

</div>

</>
  )
}

export default Allposts