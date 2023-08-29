import React from 'react'
import './Navbar.css';
// import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <meta charSet="UTF-8"/>
   <title> Responsive Drop Down Navigation Menu | Oneway garments</title>
   <link rel="stylesheet" href="Navbar.css"/>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'/>
     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
   

  <nav>
    <div className="navbar">
      <i className='bx bx-menu'></i>
      <div className="logo"><a href="#">Oneway Garment</a></div>
      <div className="nav-links">
        <div className="sidebar-logo">
          <span className="logo-name">Oneway Garment</span>
          <i className='bx bx-x' ></i>
        </div>
        <ul className="links">
          {/* <li><NavLink to='/' href="#">HOME</NavLink></li> */}
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">Products</a>
            <i className='bx bxs-chevron-down js-arrow arrow '></i>
            <ul className="js-sub-menu sub-menu">
              <li className="more">
                <span><a href="#">Formals</a>
                <i className='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
                <ul className="more-sub-menu sub-menu">
                  {/* <li><NavLink to='Products' href="#">Top wear</NavLink></li> */}
                  <li><a href="#">Top wear</a></li>
                  <li><a href="#">Bottom wear</a></li>
                </ul>
              </li>
              <li className="more">
                <span><a href="#">Casual</a>
                <i className='bx bxs-chevron-right arrow more-arrow'></i>
              </span>
                <ul className="more-sub-menu sub-menu">
                  <li><a href="#">Top wear</a></li>
                  <li><a href="#">Bottom wear</a></li>
                </ul>
              </li>
            </ul>
          </li>
          {/* <li><NavLink to='AboutUs' href="#">ABOUT US</NavLink></li>
          <li><NavLink to='ContactUs' href="#">CONTACT US</NavLink></li> */}
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
        <div className="container-fluid">
  </div>


      </div>
      
      
        <div className="social-media">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>

          <a href="#">
          <i className="fa-regular fa-heart"></i>
          </a>
          <a href="#">
          <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
