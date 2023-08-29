import React, { useState } from 'react';
import './FormalTop.css';
import { NavLink } from 'react-router-dom'

const ProductCard = ({ imgSrc, title, price }) => {
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
  
    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = ['Red', 'Green', 'Blue', 'Yellow','Grey','Black'];
  
    const handleSizeChange = (size) => {
      setSelectedSizes((prevSelectedSizes) =>
        prevSelectedSizes.includes(size)
          ? prevSelectedSizes.filter((item) => item !== size)
          : [...prevSelectedSizes, size]
      );
    };
  
    const handleColorChange = (color) => {
      setSelectedColors((prevSelectedColors) =>
        prevSelectedColors.includes(color)
          ? prevSelectedColors.filter((item) => item !== color)
          : [...prevSelectedColors, color]
      );
    };
  
    const handleAddToWishlist = () => {
      setWishlist((prevWishlist) => [...prevWishlist, { imgSrc, title, price }]);
    };
  
    const handleAddToCart = () => {
      setCart((prevCart) => [...prevCart, { imgSrc, title, price }]);
    };


  return (
    <div className="main">
    <div className="card1">

      <img src={imgSrc} className="card-img-top1" alt="..." />
      <div className="card-body1">
        <h5 className="card-title1">{title}</h5>
        <p className="card-text1">M.R.P {price}</p>

        {/* Size Panel */}
        <h6>Size:</h6>
        <div className="size-panel1">
          {sizes.map((size) => (
            <label key={size}>
              <input
                type="radio"
                name="size"
                value={size}
                checked={selectedSizes.includes(size)}
                onChange={() => handleSizeChange(size)}
              />
              <span className="checkmark"></span>
              {size}
            </label>
          ))}
        </div>

        {/* Color Panel */}
        <h6>Color:</h6>
        <div className="color-panel1">
          {colors.map((color) => (
            <label key={color}>
              <input
                type="radio"
                name="color"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span className={`color-option1 ${color.toLowerCase()}-color`}></span>
              {color}
            </label>
          ))}
        </div>

        <div className="button-container1">
          <button className="btn-btn-transparent btn1" onClick={handleAddToWishlist}><div className='icons'><i className="fa-solid fa-heart" id='icon'></i>
            Wishlist
            </div>
          </button>
          <button className="btn-btn-transparent" id='cartid' onClick={handleAddToCart}><div className="icons"><i className="fa-solid fa-cart-shopping"></i>
            Add to cart
            </div>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

const FormalTop = () => {
    return(
            <div>
              <header> 
                  <h1 className="Center">
                        Formal Top 
                  </h1>
              </header>
            <div className="card-container1">
              {/* <NavLink to="/Product"> */}
                <ProductCard imgSrc="images/f1.png" title="Blue Formal Shirt" price="599" />
              {/* </NavLink> */}
              <ProductCard imgSrc="images/f7.jpeg" title="Grey Cotton Shirt" price="699" />
              
              <ProductCard imgSrc="images/f8.jpeg" title="Blue Formal Shirt" price="599" />
              <ProductCard imgSrc="images/f10.jpeg" title="White Formal Shirt" price="499" />
              <ProductCard imgSrc="images/f9.jpeg" title="Blue Formal Shirt" price="699" />
              <ProductCard imgSrc="images/f2.jpeg" title="Red Chex Shirt" price="699" />
             
            </div>
            </div>
    )
}



export default FormalTop
