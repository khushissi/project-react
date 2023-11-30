import React from "react";
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";

const App= () =>{
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Product" element={<Products/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/singleproduct" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>

        
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;
