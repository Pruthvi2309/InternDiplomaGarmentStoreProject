import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Top2 = () => {
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
    return (
        <Wrapper>
            <div className="main2">
                
                {/* card1 */}
                {data.map((elem) => {
                    const img = "formal/"+elem.id+".jpeg";
                    return(
                        
                <div className="card2" key={elem.id}>
                    <NavLink to="/Product">
                    <img src={img} className="card-img-top2" alt="..." />
                    </NavLink>
                    <div className="card-body2">
                        <h5 className="card-title2">{elem.Name}</h5>
                    </div>
                    <div className='size-panel2'>
                    <p className="card-text2">MRP {elem.Prices}</p>
                        <PanelTitle>Size:</PanelTitle>
                        <RadioGroup className="size-radio-group">
                            <label>
                                <input type="radio" name="size" value="small" />
                                S
                            </label>
                            <label>
                                <input type="radio" name="size" value="medium" />
                                M
                            </label>
                            <label>
                                <input type="radio" name="size" value="large" />
                                L
                            </label>
                            <label>
                                <input type="radio" name="size" value="xl" />
                                XL
                            </label>
                        </RadioGroup>
                    </div>
                    <div className='color-panel2'>
                        <PanelTitle>Color:</PanelTitle>
                        <RadioGroup className="color-radio-group">
                            <ColorLabel>
                                <input type="radio" name="color" value="red" />
                                Red
                            </ColorLabel>
                            <ColorLabel>
                                <input type="radio" name="color" value="green" />
                                Green
                            </ColorLabel>
                            <ColorLabel>
                                <input type="radio" name="color" value="blue" />
                                Blue
                            </ColorLabel>
                        </RadioGroup>
                        <RadioGroup className="color-radio-group">
                            <ColorLabel>
                                <input type="radio" name="color" value="yellow" />
                                Yellow
                            </ColorLabel>
                            <ColorLabel>
                                <input type="radio" name="color" value="grey" />
                                Grey
                            </ColorLabel>
                            <ColorLabel>
                                <input type="radio" name="color" value="black" />
                                Black
                            </ColorLabel>
                        </RadioGroup>
                    </div>

                    <div className="card-footer2">
                        <Button className="wishlist-button">
                            <i className="fas fa-heart"></i> Wishlist
                        </Button>
                        <Button className="cart-button">
                            <i className="fas fa-shopping-cart"></i> Add to Cart
                        </Button>
                    </div>
                </div>
                    )
                })}
            </div>
        </Wrapper>
    );
};


const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: -100px; 
flex-wrap: wrap;
font-size: 18px;
margin-bottom: 200px;
    .main2{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex-wrap: wrap;    
        justify-content: center; 
        gap: 5rem; 
        max-width: 100px; 
        margin: 0 auto;
        // margin-bottom: 200px;
        gap: 0.0rem 3rem;
    }

.card2 {
    width: 20rem;
    background: linear-gradient(to bottom right, #ffffff, #f0f0f0);
    border: 1px solid #ccc;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 10px;
    margin-top: 170px;
}

.card-img-top2 {
    margin-top: -3px;
    width: 318px;
    max-height: 335px; 
    object-fit: cover;
    margin-bottom: 10px;
}

.card-body2 {
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: -22rem;
}

    .card-title2 {
        font-size: 1.50rem;
        margin-bottom: 20rem;
    
    }

    .card-text2 {
        color: green;
        font-weight: 500px;
        font-size: 18px;
        text-align: center;
        margin-top: 32px;
    }

    .size-panel2, .color-panel2 {
        width: 100%;
        margin-bottom: -3px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowwrap;
        justify-content: flex-end;
        align-content: center;
    }

    .card-footer2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        margin-top: 10px;
        // margin-bottom: 10px;
    }

    .wishlist-button{
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: background-color 0.3s, color 0.3s;
        text-decoration: none;
        color: black;

    }
    .cart-button {
        background: none;
        border: none;
        padding: 0.5rem 1rem;
        font-size: 14px;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition: background-color 0.3s, color 0.3s;
        text-decoration: none;
    }

    .wishlist-button:hover{
        background-color: pink;
        color: red;
    }
    .cart-button:hover {
        background-color: #007bff;
        color: #f8f9fa;
    }

    .cart-button {
        background-color: black;
        color: white;
        margin-left: 10px;
    }
   
    .fas {
        margin-right: 5px;
    }
`;


const PanelTitle = styled.h6`
    text-align: center;
    font-size: 18px;
    margin-bottom: 10px;
`;

const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    font-size: 18px;
`;

const ColorLabel = styled.label`
    font-size: 14px;
    display: flex;
    align-items: center;
`;

const Button = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export default Top2;
