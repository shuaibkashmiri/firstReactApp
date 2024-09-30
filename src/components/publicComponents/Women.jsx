import React, { useEffect, useState } from 'react'
import "../styles/women.scss"
import api from '../../utils/AxiosInstance'
const Women = () => {
  const [womenCatagory , setWomenCatagory]=useState()
  const getWomenCatagory=async ()=>{
   
    try {
      const res =await api.get("/products/women");
      console.log(res.data)
      setWomenCatagory(res.data.products)
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getWomenCatagory()
  },[])
  
    return (
      <>
      <div className="main">
      {womenCatagory&&womenCatagory.map((products)=><div className='product'>
     <div className='image'>
     <img src={products.imageUrl} alt="" />
     </div>
     <div className='product-info'>
      <p className='title'>{products.title}</p>
      <p className='catagory'>{products.catagory}</p>
      <p className='size'>Available Sizes {products.size}</p>
      <p className='price'>₹ {products.price}</p>
  
      <button>Add To Cart</button>
     </div>
  </div>)}
      </div>
      </>
    )
  }

export default Women