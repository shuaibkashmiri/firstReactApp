import React, { useEffect, useState } from "react";
import Home from "./sharedComponents/Home";
import "../styles/blogs.scss";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Profile from "../images/blog.png";
import api from "../utils/AxiosInstance";

const PersonalBlogs = () => {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
     
      
      const res = await api.get("/products/getAll");
        console.log(res.data.newProducts)
        setPosts(res.data.newProducts);
        
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
        
    fetchBlogs()
  }, []);


  return (
    <>
      <ToastContainer />
      
      <Home
        heading={'Latest Blogs'}
        profile={Profile}
      />
        
      <div className="blogs">
   

        {posts &&
          posts.map((post) => (
            <div className="product-card">
      <img src={post.imageUrl} alt="img" className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{post.title}</h2>
        <p className="product-description">{post.description}</p>
        <p className="product-price">{post.price}</p>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
          ))}
      </div>
    </>
  );
};

export default PersonalBlogs;
