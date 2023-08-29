import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Green', 'Blue', 'Red', 'Yellow'];

  const rating = 4.3; 

  return (
    <div className="product-page-container">
      <header>
        <h1>Green Cotton Shirt</h1>
      </header>

      <main className="product-main">
        <div className="product-image">
          <img src="images/a1.png" alt="Green Cotton Shirt" />
          <i className="fa-regular fa-heart" id="icons-heart"></i>
          <div className="product-rating">
            {rating.toFixed(1)} <i className="fa-solid fa-star filled"></i>
          </div>
        </div>
        <div className="product-details">
          <h2>Product Description</h2>
          <p>
            Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar &amp; Short Sleeves
          </p>
          <hr />
          <h2>Available Sizes</h2>
          <div className="size-radio-buttons">
            {sizes.map((size) => (
              <label key={size}>
                <input type="radio" name="size" value={size} />
                {size}
              </label>
            ))}
          </div>
          <hr />
          <h2>Available Colors</h2>
          <div className="color-radio-buttons">
            {colors.map((color) => (
              <label key={color}>
                <input type="radio" name="color" value={color} />
                {color}
              </label>
            ))}
          </div>
          <hr />
          <div className="product-price">
            <p>Price: $699</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
