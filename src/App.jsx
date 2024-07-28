
import Home from "./components/Home";
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
import Dashboard from "./components/Dashboard.jsx";




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
          <Route path="/Gallery" element= {<Gallery/>} />
          <Route path="/news" element= {<News/>} />
          <Route path="/signup" element= {<Signup/>} />
          <Route path="/login" element= {<Login/>} />
          <Route path="/dashboard" element= {<Dashboard/>} />




 </Routes>
      
      <Footer />
      </BrowserRouter>
      </>
      
  );
}



export default App;



// learn useState