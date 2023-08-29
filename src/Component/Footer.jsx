import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <footer>
        <div className="footer0">
          <h1>OneWay</h1>
        </div>
        <div className="footer1">
        <div className="social-media">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
             <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
             <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        </div>

        {/* <div className="footer2">
          <div className="product">
            <div className="heading">Products</div>
            <div className="div">Shop</div>
            <div className="div">Sale</div>
            <div className="div">New Arrivals</div>
          </div> */}
           <div className="footer2">
          <div className="services">
          <div className="heading">Products</div>
            <div className="div">Casual Wears</div>
            <div className="div">Formal Wears</div>
            {/* <div className="div">New Arrivals</div> */}
          </div>
          <div className="services">
          <div className="heading">Services</div>
            <div className="div">Customer Support</div>
            <div className="div">Shipping</div>
            <div className="div">Returns</div>
          </div>
          <div className="Company">
            <div className="heading">Company</div>
            <div className="div">About Us</div>
            {/* <div className="div">Careers</div> */}
            <div className="div">Contact Us</div>
          </div>
        </div>
        <div className="footer3">© 2023 InnoBrain </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  footer {
    background-color:  #17252A;
    color: white;
    padding: 40px 0;
    text-align: center;
    margin-top: 27rem;
  }

  .footer0 {
    text-align: center;
    margin-bottom: 30px;
  }

  .footer0 h1 {
    text-align: center;
    font-size: 24px;
    margin: 0;
  }

  .footer1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  .social-media {
    display: flex;
    gap: 15px;
  }

  .social-media a {
    color: white;
    font-size: 24px;
    transition: color 0.3s ease-in-out;
  }

  .social-media a:hover {
    color: #f1c40f ;
  }

  .footer2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 30px;
  }

  .heading {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    background-color:  #17252A;
    padding: 5px 0;
  }

  .div {
    font-size: 16px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    background-color:  #17252A;
    padding: 5px 0;
  }

  .div:hover {
    color: #f1c40f;
  }

  .footer3 {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #555;
    font-size: 14px;
    color: white;
  }

  @media screen and (max-width: 768px) {
    .footer2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Footer;
