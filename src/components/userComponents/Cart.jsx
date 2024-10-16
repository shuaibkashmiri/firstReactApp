import React, { useEffect, useState } from 'react'
import "../styles/cart.scss"
import Authorized from '../../auth/Authorized'
import api from '../../utils/AxiosInstance'

const Cart = () => {
    Authorized()
    const [products,setProducts]=useState([]);
    const cartItems=async()=>{
        try {
            const res=await api.get("/products/getcart")
            setProducts(res.data.getUser.cart)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        cartItems()
    },[])
  return (
    <>
    <div className="main">
    {/* {products&&products.map((products)=><div className='product'>
   <div className='image'>
   <img src={products.imageUrl} alt="" />
   </div>
   <div className='product-info'>
    <p className='title'>{products.title}</p>
    <p className='catagory'>{products.catagory}</p>
    <p className='size'></p>
    <p className='price'>₹ {products.price}</p>
   </div>
</div>)} */}
</div>
    </>
  )
}

export default Cart