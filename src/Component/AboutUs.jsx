import React from 'react'
import './AboutUs.css'
import { NavLink } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div>
       <section className="about-section">
        <div className="container">
            <div className="row">                
                <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div className="inner-column">
                        <div className="sec-title">
                            <span className="title">About Us</span>
                            <h2>Discover New Arrivals at One Way Garments - Elevate Your Wardrobe</h2>
                        </div>
                        <div className="text">Introducing the latest additions to our collection – the New Arrivals at One Way Garments. As a beacon of men's fashion in [Your Location], we're excited to present a range of contemporary styles that redefine your wardrobe with elegance and flair.</div>
                      <div className="text">
                      Unveiling Elegance
                      </div>
                      <div className="text">
                      Our New Arrivals are a testament to our dedication to providing you with the finest in men's fashion. Each piece has been carefully selected to ensure it aligns with our commitment to craftsmanship, comfort, and sophistication. Whether you're a connoisseur of timeless classics or an enthusiast of modern trends, our latest offerings are designed to cater to your evolving tastes.
                      </div>
                        <div className="btn-box">
                            <NavLink to="/Contact" className="theme-btn btn-style-one">Contact Us</NavLink>
                        </div>
                    </div>
                </div>

                {/* <!-- Image Column --> */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                    <div className="inner-column wow fadeInLeft">
                      <div className="author-desc">
                        <h2>One way</h2>
                        <span>Garments</span>
                      </div>
                        <figure className="image-1"><a href="#" className="lightbox-image" data-fancybox="images"><img title="Jay Prajapati" src="images/w1.jpg" alt=""/></a></figure>
                     
                    </div>
                </div>
              
            </div>
           <div className="sec-title">
                            <span className="title"> What's in Store</span>
                            <h2>We want to lead in innovation & Fashion</h2>
                        </div>
          <div className="text">
          Explore an array of options that span the spectrum of formal and casual wear. From impeccably tailored suits that command attention to versatile separates that effortlessly blend style and comfort, our New Arrivals are a harmonious blend of artistry and practicality. Discover new shades, patterns, and silhouettes that mirror the dynamism of contemporary men's fashion.
              </div>
               <div className="text">
               Your Personal Style, Reimagined
               </div>
               <div className="text">
               At One Way Garments, we understand that style is a language - an expression of your individuality. Our New Arrivals empower you to tell your story with every ensemble. Let your attire resonate with your aspirations, whether you're making a lasting impression at a board meeting or embracing relaxation on the weekend.
              </div>
               <div className="text">                
               Visit Us
               </div>
               <div className="text">
               We invite you to visit our store at [Store Address] to witness the New Arrivals in person. Immerse yourself in the luxurious fabrics, experience the intricate details, and feel the undeniable quality that defines One Way Garments. Our in-store stylists are ready to assist you in curating looks that reflect your unique persona.
               </div>
               <div className="text">
                 Embrace the New
                 </div>
               <div className="text">   
              Upgrade your wardrobe with the latest trends that are curated with your discerning taste in mind. Each garment encapsulates the essence of modern masculinity, allowing you to embrace a style that is both sophisticated and effortlessly chic.
              </div>
              <div className="text">
              Stay Connected
              </div>
               <div className="text">
                Stay informed about our latest releases and promotions by following us on our social media platforms and subscribing to our newsletter. Your journey towards sartorial excellence starts with One Way Garments.
              </div>
               <div className="text">
               Thank you for choosing One Way Garments as your destination for elevating your wardrobe. We look forward to welcoming you and assisting you in finding pieces that resonate with your distinct style.
              </div>
        </div>
        </section>
    </div>
  )
}

export default AboutUs
