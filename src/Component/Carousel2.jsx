import React from 'react'
import './Carousel2.css';

const Carousel2 = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide pc-carousal" data-bs-ride="carouselExampleIndicators">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner container">
          {/* <h4 className="container3-heading">POPULAR SEARCHES</h4> */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/1.jpeg" className="" />
                </div>
                <h6 className="caption-text">Green Cotton Shirt</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/2.jpeg" className="" />
                </div>
                <h6 className="caption-text">Red Cotton Shirt</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/3.jpeg" className="" />
                </div>
                <h6 className="caption-text">Light Green Cotton Shirt</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/4.jpeg" className="" />
                </div>
                <h6 className="caption-text">Blue Cotton Shirt</h6>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./bottom/1.jpeg" className="" />
                </div>
                <h6 className="caption-text">Black Formal Pant</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./bottom/2.jpeg" className="" />
                </div>
                <h6 className="caption-text">Brown Formal Pant</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./bottom/3.jpeg" className="" />
                </div>
                <h6 className="caption-text">White Formal Pant</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="bottom/4.jpeg" className="" />
                </div>
                <h6 className="caption-text">Grey Formal Pant</h6>
              </div>
            </div>
          </div>


          <div className="carousel-item">
            <div className="row ">
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./formal/1.jpeg" className="" />
                </div>
                <h6 className="caption-text">Blue Formal Shirt</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./formal/12.jpeg" className="" />
                </div>
                <h6 className="caption-text">Chex Shirt</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./formal/7.jpeg" className="" />
                </div>
                <h6 className="caption-text">Blue Formal Shirt</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./formal/13.jpeg" className="" />
                </div>
                <h6 className="caption-text">Blue Chex Formal Shirt  </h6>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev arrow-btn-cir1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next arrow-btn-cir2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Carousel2
