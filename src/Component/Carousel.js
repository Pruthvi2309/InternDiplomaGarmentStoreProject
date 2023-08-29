import React from 'react'
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
      <div class="cards-wrapper">
  <div class="card">
  <div className="tag">70%</div>
    <img src="./images/a1.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Green Cotton Shirt</h5>
      <p class="card-text">M.R.P 599</p>
      <a href="#" class="btn btn-primary">View More</a>
    </div>
  </div>
  <div class="card">
  <div className="tag">60%</div>
    <img src="./images/a2.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Red Cotton Shirt</h5>
      <p class="card-text">M.R.P 599</p>
      <a href="#" class="btn btn-primary">View More</a>
    </div>
  </div>
  <div class="card">
  <div className="tag">50%</div>
    <img src="./images/a3.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Light Green Cotton Shirt</h5>
      <p class="card-text">M.R.P 599</p>
      <a href="#" class="btn btn-primary">View More</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Carousel
