import React, { useState } from 'react';
import Authorized from '../../auth/Authorized'
import './AddProducts.scss';
import api from '../../utils/AxiosInstance';
import { toast, ToastContainer } from 'react-toastify';

const AddProducts = () => {
  Authorized()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("")
  const [description,setDescription]=useState("");
  const [gender,setGender]=useState("")
  const [catagory,setCatagory]=useState("")
  const [size,setSize]=useState("")

  const formData = new FormData();

  formData.append("title", title);
  formData.append("image", image);
  formData.append("price", price);
  formData.append("gender", gender);
  formData.append("catagory", catagory);
  formData.append("size", size);
  formData.append("description",description)


  const addProduct=async()=>{
    try {
      const res =await api.post("/products/add",formData);
      if(res.data.message === "Product Added SucessFully"){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.message)
      }
      
    } catch (error) {
      console.log(error)
    }
  }




  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    addProduct()
  
  };



  return (
    <div className="main">
      <h1>Add Product</h1>
      <ToastContainer/>
<div className="add-products-container">
      <form className="add-products-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e)=>{setImage(e.target.files[0])}}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e)=>{
            setPrice(e.target.value)
          }}
          required
        />
        <label htmlFor="size">Size:</label>
        <input
          type="number"
          id="size"
          name="size"
          value={size}
          onChange={(e)=>{
            setSize(e.target.value)
          }}
          required
        />
       <label htmlFor="gender">Gender:</label>
        <input
          id="gender"
          name="gender"
          value={gender}
          onChange={(e)=>{setGender(e.target.value)}}
          required
        />

       <label htmlFor="catagory">Catagory:</label>
        <input
          id="catagory"
          name="catagory"
          value={catagory}
          onChange={(e)=>{setCatagory(e.target.value)}}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e)=>{setDescription(e.target.value)}}
          required
        />

        <button type="submit" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
    </div>
    
  );
};

export default AddProducts;
