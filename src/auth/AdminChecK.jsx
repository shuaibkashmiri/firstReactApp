import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../utils/AxiosInstance";

const AdminChecK = () => {
 const navigate =useNavigate()
const checkAdmin= async()=>{
    try {
        const res =await api.get("/user/isAdmin");
        if(res.data.message==="Unauthorised"){
            navigate("/login")
            toast.error("Unauthorised Only Admin Can Access This Page")
        }else if(res.data.message==="Admin Verified"){
            return true
        }
        
    } catch (error) {
        console.log(error)
        navigate("/login")
    }
}
useEffect(()=>{
    checkAdmin()
},[])
}

export default AdminChecK