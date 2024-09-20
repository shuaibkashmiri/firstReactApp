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

  useEffect(() => {
        
    fetchProducts()
  }, []);
  return (
    <>
    <h1>New Arrivals!</h1>
<div className="main">
{products&&products.map((products)=><div className='product'>
   <div className='image'>
   <img src={products.imageUrl} alt="" />
   </div>
   <div className='product-info'>
    <p>{products.title}</p>
    <p>{products.catagory}</p>
    <p>{products.gender}</p>
    <p className='price'>₹ {products.price}</p>

    <button>Add To Cart</button>
   </div>
</div>)}
</div>
    </>
  )
}

export default Products