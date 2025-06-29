import React,{useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import axios from 'axios'
import {DataProvider} from './context/DataContext'
import Carousel from './components/Carousel.jsx'
import Footer from './components/Footer.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import Category from './components/Category.jsx'
import { useCart } from './context/cartContext.jsx'
import ErrorBoundary from './context/ErrorBoundary.jsx'


const App = () => {

  const [location, setLocation] = useState()
   const [openDropdown,setOpenDropdown]=useState(false)
   const {cartItem, setCartItem} = useCart()
  const getLocation = async()=>{
    navigator.geolocation.getCurrentPosition(async pos=>{
      const{latitude,longitude}=pos.coords 
      // console.log(latitude,longitude);

      
const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`


const response = await axios.get(url);
      try{
        const location = await axios.get(url)
        // console.log(location);
        
         const exactLocation = location.data.address
         setLocation(exactLocation)
         setOpenDropdown(false)
         console.log(exactLocation);
      }
      catch(error){
        console.log(error)
      }
    })
  }
  useEffect(()=>{
    getLocation()
  },[])
 
  return (
    
   <BrowserRouter>
   <Navbar location ={location} getLocation={getLocation} openDropdown ={openDropdown} setOpenDropdown ={setOpenDropdown}/>
   <Routes>
    <Route path ='/' element={<Home/>}></Route>
    <Route path='/products' element={<Products/>}></Route>
    <Route path='/products/:id' element={<SingleProduct/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/cart' element={ <ErrorBoundary><Cart location= {location} getLocation ={getLocation} /></ErrorBoundary>}></Route>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
