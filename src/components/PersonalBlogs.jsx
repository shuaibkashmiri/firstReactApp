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
     
      
      const res = await api.get("/user/getAll");
        setPosts(res.data.posts);
        
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
            <div className="blog">
              <h1>{post.title}</h1>
              <img src={post.imageUrl} alt="no-image" />
              <p>{post.author}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PersonalBlogs;
