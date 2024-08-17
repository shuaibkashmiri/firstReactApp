import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Authorized =  () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        return navigate("/login");
      }

      if (token) {
        const baseUrl = `https://app-back-end-nm7b.onrender.com/token/verify/${token}`;

        const res = await axios.get(baseUrl);

        if (res.data.msg === "not verified") {
          return navigate("/login");
        } 
        else if (res.data.msg === "Token verified"){
          const id = res.data.decode._id

          localStorage.setItem("id" , id )
        }

     
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong!");
    }
  };


  

  useEffect(() => {
    checkAuth();
  }, []);
};

export default Authorized;
