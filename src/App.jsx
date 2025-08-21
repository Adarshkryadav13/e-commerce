import React, { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import { useEffect } from 'react';
import axios from 'axios'
import  Footer from './components/Footer';
import { useCart } from './context/CartContext';

const App = () => {
  const [location,setLocation]= useState()
  const { cartItem ,setCartItem } = useCart([]);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      console.log(latitude, longitude);
      const url = `http://localhost:5000/reverse-geocode?lat=${latitude}&lon=${longitude}`;

  
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        console.log(exactLocation);
      } catch (error) {
        console.error(error);
      }
    });
  };
  
  useEffect(()=>{
    getLocation()
  },[])
  
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart)); // safe, because "[]" parses correctly
    } else {
      setCartItem([]); // fallback to empty array if nothing in localStorage
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);
  

  return (
   <BrowserRouter>
   <Navbar location={location} getLocation={getLocation}/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/cart' element={<Cart location={location} getlocation={getLocation}/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/>
   </BrowserRouter>
  )
}

export default App