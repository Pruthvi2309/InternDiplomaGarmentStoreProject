import React, { useEffect, useState } from 'react';
// import './ProductPage.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductPage = () => {
  const [data, setData] = useState([]);

    const fetchData = async() => {
        try {
            const response = await fetch("http://localhost:3000/formal_top",{
                method:'get',
                headers:{'Content-Type':'application/json'},
            });
            const responseData = await response.json();
            setData(responseData);
        } catch (error) {
            console.log('Error fetching data',error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['Green', 'Blue', 'Red', 'Yellow'];

  const rating = 4.3; 
  
  return (
    <Wrapper>
 {data.map((elem) => {
                    const img = "formal/"+elem.id+".jpeg";
                    return(
                  
    <div className="product-page-container">
   
      <header>
        <h1>{elem.name}</h1>
      </header>

      <main className="product-main">
        <div className="product-image">
          <Link to="Product">
          <img src={img} alt="Green Cotton Shirt" />
          </Link>
          <i className="fa-regular fa-heart" id="icons-heart"></i>
          <div className="product-rating">
            {rating.toFixed(1)} <i className="fa-solid fa-star filled"></i>
          </div>
        </div>
        <div className="product-details">
          <h2>Product Description</h2>
          <p>
            {elem.description}
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
            <p>Price: ${elem.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>
    
    </div>
      )
    })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
.product-page-container {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  background-color: #000000;
  color: #fff;
  padding: 20px;
}

.product-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  margin: -35px;
}

.product-image {
  position: relative;
}

.product-image img {
  max-width: 100%;
  height: auto;
  margin-top: 39px;
}

#icons-heart {
  position: absolute;
  top: 46px;
  right: 10px;
  font-size: 24px;
  color: black;
  cursor: pointer;
}

.product-rating {
  position: absolute;
  bottom: 12px;
  right: 15px;
  background-color: rgba(255, 255, 255, 0.8); 
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
}

.product-rating i {
  font-size: 20px;
  margin-right: 2px;
}

.filled {
  color: gold;
}

.unfilled {
  color: #ccc;
}

.product-details {
  flex: 1;
  padding: 20px;
  margin-top: 17px;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 17px;
}

.product-details h2 {
  margin-bottom: 10px;
  font-size: 28px;
}

.size-radio-buttons,
.color-radio-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.size-radio-buttons label,
.color-radio-buttons label {
  display: flex;
  align-items: center;
}

.size-radio-buttons input[type="radio"],
.color-radio-buttons input[type="radio"] {
  margin-right: 5px;
}

.product-price {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

button {
  background-color: #000000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

footer {
  text-align: center;
  margin-top: 20px;
}


hr{
   border: 0.4 solid gray;
}
`
export default ProductPage;
