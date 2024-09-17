import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery.jsx"
import Nopage from "./components/Nopage.jsx"
import{BrowserRouter, Routes,Route} from "react-router-dom"
import News from "./components/News.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import Loading from "./components/sharedComponents/Loading.jsx";
import Index from "./components/Index.jsx";
import PersonalBlogs from "./components/PersonalBlogs.jsx";
import AddProducts from "./components/adminComponents/AddProducts.jsx";
import Products from "./components/Products.jsx";



const Dashboard =React.lazy(()=>delay(import("./components/Dashboard.jsx")))


async function delay(promise){
  await new Promise((resolve)=>{
    setTimeout(resolve,2000)
  })

  
  return promise
}

const App = () => {
  
  const [change, setChange] = useState(false);
  const [loading,setLoading]=useState(false);
  return (
    <>
     <BrowserRouter>
      <Navbar change={change} setChange={setChange} />
     <Routes>
     <Route path="*" element= {<Nopage/>} />    
          <Route path="/" element= {<Index/>} />
          <Route path="/contact" element= {<Contact/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/Gallery" element= {<Gallery/>} />
          <Route path="/news" element= {<News/>} />
          <Route path="/signup" element= {<Signup/>} />
          <Route path="/login" element= {<Login change={change} setChange={setChange}/> } />
          <Route path="/dashboard" element= {<Suspense fallback={<Loading></Loading>}><Dashboard loading={Loading} setLoading={setLoading}/></Suspense>} />
          <Route path="/blogs" element= {<Suspense fallback={<Loading></Loading>}><PersonalBlogs/></Suspense>} />
          <Route path="/addproducts" element={<AddProducts/>}/>
          <Route path="/products" element={<Products/>}/>



 </Routes>
      
      <Footer />
      </BrowserRouter>
      </>
      
  );
}



export default App;



// learn useState