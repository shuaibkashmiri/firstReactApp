import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services"
import Nopage from "./components/Nopage.jsx"
import{BrowserRouter, Routes,Route} from "react-router-dom"


const App = () => {
  return (
    <>
     <BrowserRouter>
      <Navbar />
     <Routes>
     <Route path="*" element= {<Nopage/>} />    
          <Route path="/" element= {<Home/>} />
          <Route path="/contact" element= {<Contact/>} />
          <Route path="/about" element= {<About/>} />
          <Route path="/services" element= {<Services/>} />
 </Routes>
      
      <Footer />
      </BrowserRouter>
      </>
      
  );
}



export default App;



// learn useState