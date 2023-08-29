import React from 'react'
// import './Carousel.css'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Carousel = () => {
  return (
    <Wrapper>
    <div>
      <div className="cards-wrapper">
  <div className="card">
  <div className="tag">70%</div>
    <img src="./images/1.jpeg" className="card-img-center" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Green Cotton Shirt</h5>
      <p className="card-text">M.R.P 599</p>
      <NavLink to="Top"  className="btn btn-primary">View More</NavLink>
    </div>
  </div>
  <div className="card">
  <div className="tag">60%</div>
    <img src="./images/2.jpeg" className="card-img-center" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Red Cotton Shirt</h5>
      <p className="card-text">M.R.P 599</p>
      <NavLink to="Top"  className="btn btn-primary">View More</NavLink>
    </div>
  </div>
  <div className="card">
  <div className="tag">50%</div>
    <img src="./images/3.jpeg" className="card-img-center" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Light Green Cotton Shirt</h5>
      <p className="card-text">M.R.P 599</p>
      <NavLink to="Top"  className="btn btn-primary">View More</NavLink>
    </div>
  </div>
</div>
    </div>
    </Wrapper>

  )
}

const Wrapper=styled.div`
.cards-wrapper {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;   
  margin-top: 4px;
  margin-bottom: 90px;
}

.card {
  position: relative;
  margin-top: 10%;
  width: 300px;
  height: 500px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.card-img-top {
  width: 100%;
  height: 100%;
  object-fit: initial;
  align-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  /* margin-bottom: 15px; */
  padding: 15px;
}

.card-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.card-text {
  font-size: 13px;
  color: #555;
  margin-bottom: 15px;
}

.btn {
  display: inline-block;
  padding: 8px 16px;
  background-color: #000000;
  color: #fff;
  border: none;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}

.btn:hover {
  background-color: #f1c40f;
}

.tag {
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: #fff;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
}

img{
  max-width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .cards-wrapper {
    flex-direction: column;
    align-items: stretch;
    align-items: center;
  }
  
  .card {
    height: auto;
    margin-bottom: 20px;
    align-items: center;
  }
  
  .tag {
    top: 5px;
    left: 5px;
    font-size: 10px;


  }
}

`

export default Carousel
