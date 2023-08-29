import React, { Component } from 'react';
import './HomePage.css';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';

const HomePage = () => {
  return (
    <div>
    <div className="homepage">
      <div className="homepage-image">
        <img src="./images/j1.jpg" alt="" />
      </div>
      <h1 className="overlay">One Way</h1>
      <div className="main">
      
      </div>
      
    </div>
    <Carousel/>
    <Carousel2/>
   </div>
  );
};

export default HomePage;

