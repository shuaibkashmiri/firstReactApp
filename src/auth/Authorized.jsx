import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/AxiosInstance";

const Authorized =  () => {
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
        const res = await api.get("/token/verify");
        if (res.data.msg === "not verified") {
          return navigate("/login");
        } 
        else if (res.data.msg === "Token verified"){
          return true;
        }
    } catch (error) {
      console.log(error);
      navigate("/login")
      toast.error("Something Went Wrong!");
    }
  };


  

  useEffect(() => {
    checkAuth();
  }, []);
};

export default Authorized;
