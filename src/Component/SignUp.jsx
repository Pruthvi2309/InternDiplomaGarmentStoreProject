import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [fname, setName] = useState("");
  const [lname, setContact] = useState("");
  const [email, setemail] = useState("");
  const [contact, setCity] = useState("");
  const [pwd, setPassword] = useState("");

  const collectData = async () => {
    let result = await fetch('http://localhost:3000/SignUp', {
      method: 'post',
      body: JSON.stringify({ fname, lname, email, contact, pwd }),
      headers: { 'Content-Type': 'application/json' },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("items", JSON.stringify(result));
  };

  return (
    <Wrapper>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="fname" placeholder="First name" value={fname} onChange={(e) => setName(e.target.value)} required />
            <input type="text" name="lname" placeholder="Last name" value={lname} onChange={(e) => setContact(e.target.value)} required />
            <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} required />
            <input type="number" name="contact" placeholder="Contact" value={contact} onChange={(e) => setCity(e.target.value)} required />
            <input type="password" name="pwd" placeholder="Password" value={pwd} onChange={(e) => setPassword(e.target.value)} required />

            <button type="button" onClick={collectData}>Sign up</button>
          </form>
        </div>

      <div className="login">
    <form>
        <label htmlFor="chk" aria-hidden="true">Login</label>
        <input type="email" name="email" placeholder="Email" required=""/>
        <input type="password" name="pswd" placeholder="Password" required=""/>
        <NavLink to="/forgot" style={{ textAlign: 'center', display: 'block' }}>
           <i className="forgot-link">Forgot Password?</i>
        </NavLink>
        <button>Login</button>
        
    </form>
  </div>
        {/* <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div> */}

	</div>
	</Wrapper>
  )
}

const Wrapper=styled.div`
body{
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: "Jost", sans-serif;
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  }
  .main {
    width: 350px;
    height: 500px;
    margin-top: 7rem;
    margin-bottom: 10rem;
    margin-left: 475px;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
      no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
  }
  #chk {
    display: none;
  }
  .signup {
    // position: relative;
    width: 100%;
    height: 100%;
  }

  label {
    color: black;
    font-weight: bolder;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
  input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
    
  }
  
  button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: white;
    background: black;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: 0.2s ease-in;
    cursor: pointer;
    
  }

  button:hover {
    background: #f1c40f;
  }

  .login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: 0.8s ease-in-out;
  }

  .login label {
    color: black;
    font-weight: bolder;
    transform: scale(0.6);
    
  }
  
  #chk:checked ~ .login {
    transform: translateY(-500px);
  }
  #chk:checked ~ .login label {
    transform: scale(1);
  }
  #chk:checked ~ .signup label {
    transform: scale(0.6);

  .forgot-link{
      color: black;
      text-decoration: none;
      font-size: 0.8em;
      margin-top: 10px;
      display: flex;
      transition: color 0.2s ease-in-out;
      justify-content: center;
      text-align: center;
  }

  .forgot-link:hover {
      color: #f1c40f;
  }
  
}`



export default SignUp
