import React, { Component } from 'react'
import './Whishlist.css'

export class Whishlist extends Component {
  render() {
    return (
      <div>
        {/* <body id="layout"></body>  */}
            <header>
                <h1 className="Center">
                    Whishlist
                </h1>
            </header>
            <main>
                <div id="Content">
                    <div className="product">
                        <div id="product0">
                        <img src="images/a1.png.jpg" height="150" width="200"/>
                        <h3>Green Cotton Shirt</h3>
                        <p>Type: Shirt</p>
                        <p>Price: 699</p>
                    </div>
                    <input type="button" value="Add to Cart" id="0" className="but"/>
                    </div>
                </div>
                <div id="Content">
                    <div className="product">
                        <div id="product1">
                        <img src="images/a2.png.jpg" height="150" width="200"/>
                        <h3>Red Cotton Shirt</h3>
                        <p>Type: Shirt</p>
                        <p>Price: 699</p>
                    </div>
                    <input type="button" value="Add to Cart" id="1" className="but"/>
                </div>
                </div>
                <div id="Content">
                    <div className="product">
                        <div id="product2">
                        <img src="images/a3.png.jpg" height="150" width="200"/>
                        <h3>Green Cotton Shirt</h3>
                        <p>Type: Shirt</p>
                        <p>Price: 499</p>
                    </div>
                    <input type="button" value="Add to Cart" id="2" className="but"/>
                </div>
                </div>
                <div id="Content">
                    <div className="product">
                        <div id="product3">
                        <img src="images/a4.png.jpg" height="150" width="200"/>
                        <h3>Blue Cotton Shirt</h3>
                        <p>Type: Shirt</p>
                        <p>Price: 499</p>
                    </div>
                    <input type="button" value="Add to Cart" id="3" className="but"/>
                </div>
                </div>
                <div id="Content">
                    <div className="product">
                        <div id="product4">
                        <img src="images/a5.png.jpg" height="150" width="200"/>
                        <h3>Blue Cotton Shirt</h3>
                        <p>Type: Shirt</p>
                        <p>Price: 799</p>
                    </div>
                    <input type="button" value="Add to Cart" id="4" className="but"/>
                </div>
                </div>
                <div id="Content">
                    <div className="product">
                        <div id="product5">
                        <img src="images/a3.png.jpg" height="150" width="200"/>
                        <h3>Green Cotton Shirt</h3>
                        <p>Type: Shirt</p>
                        <p>Price: 499</p>
                    </div>
                    <input type="button" value="Add to Cart" id="5" className="but"/>
                </div>
                </div>
            </main>
     </div>
    )
  }
}

export default Whishlist
