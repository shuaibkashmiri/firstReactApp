import React, { useState } from 'react';
import Authorized from '../../auth/Authorized'
import './AddProducts.css';
import api from '../../utils/AxiosInstance';

const AddProducts = () => {
  Authorized()
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("")
  const [description,setDescription]=useState("");

  const formData = new FormData();

  formData.append("title", title);
  formData.append("image", image);
  formData.append("price", price);
  formData.append("description",description)


  const addProduct=async()=>{
    try {
      const res =await api.post("/products/add",formData);
      console.log(res.data)
      
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
  );
};

export default AddProducts;
