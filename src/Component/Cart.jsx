import React from 'react';

export const Cart = () => {
  const cartContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    marginTop: '0rem' 

   
  };

  const cardRegistrationStyle = {
    backgroundColor: '#d2c9ff',
    width: '200%',       
    maxWidth: '1400px',  
    margin: '0 auto'
    // marginLeft: '2rem'   
  };

  const cardBodyStyle = {
    padding: '1rem'
  };

  const rowStyle = {
    margin: '1rem'
  };

  const colStyle = {
    padding: '1rem'
  };

  const paddedContent = {
    padding: '12rem' 
  };

  const cartItemsStyle = {
    padding: '10rem'
  };

  const cartSummaryStyle = {
    backgroundColor: '#eae8e8',
    padding: '5rem'
  };

  const p5Style = {
    padding: '13rem !important',
  };

  

  return (
    <div style={cartContainerStyle}>
      <div className="card card-registration card-registration-2" style={cardRegistrationStyle}>
        <div className="card-body" style={cardBodyStyle}>
          <div className="row g-0" style={rowStyle}>
            <div className="col-lg-8 col-md-12" style={colStyle}>
              <div className="p-5" style={cartItemsStyle}>
              <div className="d-flex justify-content-between align-items-center mb-5">
              <h1 className="fw-bold mb-0 text-black" style={{ marginLeft: '20px' }}>
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    </h1>
                    <h6 className="mb-0 text-muted">3 items</h6>
                  </div>
                  <hr className="my-4"/>

                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                   <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="./images/a1.png"
                        className="img-fluid rounded-3" alt="Cotton T-shirt" style={{ marginLeft: '20px'}}/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted" style={{ marginLeft: '20px' }}>Shirt</h6>
                   <h6 className="text-black mb-0" style={{ marginLeft: '20px' }}>
                      <h6 className="text-black mb-0">Cotton T-shirt</h6>
                      </h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2" onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />
                      
                      <button className="btn btn-link px-2" onClick={() => this.parentNode.querySelector('input[type=number]').stepDown()}>
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0" style={{ marginLeft: '20px' }}>€ 44.00</h6>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-muted">
                  <i className="fas fa-times"></i>
                </a>
              </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="./images/a2.png"
                        className="img-fluid rounded-3" alt="Cotton T-shirt" style={{ marginLeft: '20px'}} />
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted" style={{ marginLeft: '20px' }}>Shirt</h6>
                <h6 className="text-black mb-0" style={{ marginLeft: '20px' }}>
                      <h6 className="text-black mb-0">Cotton T-shirt</h6>
                      </h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />

                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">€ 44.00</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="./images/a1.png"
                        className="img-fluid rounded-3" alt="Cotton T-shirt" style={{ marginLeft: '20px'}}/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">Shirt</h6>
                      <h6 className="text-black mb-0">Cotton T-shirt</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />

                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">€ 44.00</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="pt-5">
                    <h6 className="mb-0"><a href="#!" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 bg-grey" style={colStyle}>
              <div className="p-5" style={cartSummaryStyle}>
                <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Summary</h1>
                    <h6 className="mb-0 text-muted">3 items</h6>
                  </div>
                  <hr className="my-4"/>

                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="./images/a1.png"
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">Shirt</h6>
                      <h6 className="text-black mb-0">Cotton T-shirt</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2" onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />
                      
                      <button className="btn btn-link px-2" onClick={() => this.parentNode.querySelector('input[type=number]').stepDown()}>
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">€ 44.00</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="./images/a2.png"
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">Shirt</h6>
                      <h6 className="text-black mb-0">Cotton T-shirt</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />

                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">€ 44.00</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src="./images/a3.png"
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">Shirt</h6>
                      <h6 className="text-black mb-0">Cotton T-shirt</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepDown()">
                        <i className="fas fa-minus"></i>
                      </button>

                      <input id="form1" min="0" name="quantity" value="1" type="number"
                        className="form-control form-control-sm" />

                      <button className="btn btn-link px-2"
                        onClick="this.parentNode.querySelector('input[type=number]').stepUp()">
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">€ 44.00</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                    </div>
                  </div>

                  <hr className="my-4"/>

                  <div className="pt-5">
                    <h6 className="mb-0"><a href="#!" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
