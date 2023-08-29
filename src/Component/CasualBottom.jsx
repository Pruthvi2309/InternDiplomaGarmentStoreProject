import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './CasualBottom.css'



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
    <div className="card19">

      <img src={imgSrc} className="card-img-top1" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">M.R.P {price}</p>

        {/* Size Panel */}
        <h6>Size:</h6>
        <div className="size-panel">
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
        <div className="color-panel">
          {colors.map((color) => (
            <label key={color}>
              <input
                type="radio"
                name="color"
                value={color}
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span className={`color-option ${color.toLowerCase()}-color`}></span>
              {color}
            </label>
          ))}
        </div>

        <div className="button-container">
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

const CasualBottom = () => {
  return (
    <div>
      <header> 
          <h1 className="Center">
              Casual Bottom  
          </h1>
      </header>
    <div className="card-container">
      <ProductCard imgSrc="images/g10.jpeg" title="Blue Denim Jeans" price="599" />
      <ProductCard imgSrc="images/g11.jpeg" title="Grey Denim Jeans" price="599" />
      <ProductCard imgSrc="images/g12.jpeg" title="Black Denim Jeans" price="599" />
      {/* <ProductCard imgSrc="images/g5.jpeg" title="Black Denim Jeans" price="699" />
      <ProductCard imgSrc="images/k5.jpeg" title="Sky Blue Cotton Shirt" price="699" />
      <ProductCard imgSrc="images/k6.jpeg" title="Brown Cotton Shirt" price="699" /> */}


    </div>
    </div>
  );
};

export default CasualBottom;