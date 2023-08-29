import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import './Card.css'
import styled from 'styled-components'


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

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3000/casual_top");
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
  
  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <Wrapper>
    <div className="main">
    <div className="card">

      <img src={imgSrc} className="card-img-top" alt="..." />
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
    </Wrapper>
  );
};


const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await fetch("http://localhost:3000/casual_top");
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        setData(responseData.data);
        setError(null);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchInfo();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <CardWrapper>
      <header>
        <h1 className="Center">Casual Top</h1>
      </header>
      <div className="card-container">
        {data.map((current) => (
          <ProductCard
            key={current.Id}
            imgSrc={current.imgSrc}  // Replace with the actual property name
            title={current.Name}
            price={current.Prices}
          />
        ))}
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  /* Your styling for Card component */
`;



const Wrapper=styled.div`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Roboto:wght@100&display=swap'); */

// *{
//   margin: 0;
//   padding: 0;
//   /* font-family: 'Roboto', sans-serif; */
// }
.card-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-wrap: wrap;
  justify-content: center; 
  gap: 5rem; 
  max-width: 100px; 
  margin: 0 auto;
}

.card {
  width: 390px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 97%;
  margin-top: -19rem;
}

@media screen and (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
}

header {
  text-align: center;
  background-color: #000000;
  color: #fff;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: -100px;
}

.card-img-top {
  width: 300px;
  height: 300px; 
  object-fit: cover;
  margin-top: 10px; 
  border-radius: 15px;o
  margin-bottom: -12px;
}

.card-body {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* display: block; */
  align-items: center;
  justify-content: space-between;
  padding: 50px;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.card-text {
  font-size: 15px;
  color: #666;
  margin-bottom: 10px;
}

.size-panel,
.color-panel {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

h6 {
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 5px;
}

label {
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
}

.color-option {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 5px;
}

.size-panel label {
  color: #333; 
}

.size-panel input[type='checkbox']:checked + label {
  background-color: #007bff;
  color: #fff;
}

.color-panel label {
  color: #333;
}

.color-panel input[type='checkbox']:checked + label {
  color: #fff;
  background-color: #007bff;
}

.button-container {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

@media screen and (max-width: 768px) {
  .button-container {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  .button-container button {
    margin-bottom: 10px;
  }
}

.btn-btn-transparent {
  padding: 8px 16px;
  border-radius: 5px;
  text-decoration: none;
  color: red;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
}

.btn-btn-transparent:hover{
  background: #ffe6e6;
  color: red;
}

#cartid{
  background-color: black;
  color: #fff;
}

.icons{
  justify-content: space-between;
}

#icon{
  color: red;
}

.icons i{
  margin-right: 5px;
}

.btn-primary {
  background-color: #007bff;
}

button{
  border: none;
}

.btn1{
  border: 1px solid red;
}


`;
export default Card;
