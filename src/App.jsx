import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  
// import CasualBottom from './Component/CasualBottom'
// import Card from './Component/Card'
// import Wishlist from './Component/Whishlist'
// import ProductPage from './Component/ProductPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import AboutUs from './Component/AboutUs'
import ContactUs from './Component/ContactUs'
import Top from './Component/Top'
import HomePage from './Component/HomePage'  
import Footer from './Component/Footer'
import Whishlist from './Component/Whishlist'
import Cart from './Component/Cart'
import SignUp from './Component/SignUp' 
import First from './Component/First'
import ProductPage from './Component/ProductPage';
import Forgot from './Component/Forgot'
import Fopage from './Component/Fopage'
import Top2 from './Component/Top2'
import Top1 from './Component/Top1'
import Top3 from './Component/Top3'

// import Footer from './Component/Footer'
// import Carousel from './Component/Carousel'
// import C from './Component/C'
// import Carousel2 from './Component/Carousel2'
// import First from './Component/First'
// import Cart from './Component/Cart'
// import SignUp from './Component/SignUp'
// import Nav from './Component/Nav'
// import CasualBottom from './Component/CasualBottom'
// import FormalTop from './Component/FormalTop'
// import FormalBottom from './Component/FormalBottom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <First/> */}
    {/* <HomePage/> */}
    {/* <Carousel/> */}
    {/* <Carousel2/> */}
    {/* <Nav/> */}
    {/* <SignUp/> */}

     {/* <Card/> */}
     {/* <CasualBottom/> */}
     {/* <FormalTop/> */}
     {/* <FormalBottom/> */}

      {/* <Wishlist/> */}
      {/* <Cart/> */}

      {/* <ProductPage/> */}

    {/* <AboutUs/> */}


    {/* <Top/> */}
      
    
    <First/>
    {/* <Nav/> */}
    <Routes>     
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/to' element={<Top/>}/>
      <Route path="/bo" element={<Top1/>}/>
      <Route path="/Top" element={<Top2/>}/>
      <Route path="/Bottom" element={<Top3/>}/>
      <Route path="/Whish" element={<Whishlist/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/login" element={<SignUp/>}/>
      <Route path="/forgot" element={<Forgot/>}/>
      <Route path="/reset" element={<Fopage/>}/>
      <Route path='/About' element={<AboutUs/>}/>
      <Route path='/Contact' element={<ContactUs/>}/>
      <Route path='/Product' element={<ProductPage/>}/>
    </Routes>
    <Footer/> 
        

    </>
  )
}

export default App
 