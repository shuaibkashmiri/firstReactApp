 import axios from "axios";

 export const verifyToken = async () => {
  const token = localStorage.getItem("token");
  const baseUrl = "http://localhost:4000/token/verify/";

  try {
    console.log(`${baseUrl}${token}`)
    const res = await axios.get(`${baseUrl}${token}`);
    return res.data.msg;
  } catch (error) {
    console.log(error);
  }
};




