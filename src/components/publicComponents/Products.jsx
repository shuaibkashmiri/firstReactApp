import React, { useEffect, useState } from 'react'
import "../styles/products.scss"
import { toast } from 'react-toastify';
import api from '../../utils/AxiosInstance';

const Products = () => {

    const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
     
      
      const res = await api.get("/products/getAll");
        console.log(res.data.newProducts)
        setProducts(res.data.newProducts);
        
        toast.success(res.data.message);
      
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const addtoCart=async(productID)=>{
    
    try {
      const res=await api.post(`/products/addtocart/${productID}`)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
        
    fetchProducts()
  }, []);
  return (
    <>
    <h1>New Arrivals!</h1>
<div className="main">
{products&&products.slice(-3).map((products)=><div className='product'>
   <div className='image'>
   <img src={products.imageUrl} alt="" />
   </div>
   <div className='product-info'>
    <p className='title'>{products.title}</p>
    <p className='catagory'>{products.catagory}</p>
    <p className='size'>Available Sizes {products.size}</p>
    <p className='price'>₹ {products.price}</p>

    <button onClick={()=>{addtoCart(products._id)}}>Add To Cart</button>
   </div>
</div>)}
</div>
    </>
  )
}

export default Products