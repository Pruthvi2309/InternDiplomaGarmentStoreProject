import React, { useState, useEffect, useRef } from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    setNestedDropdownOpen(false);
  };

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  const closeDropdowns = (event) => { 
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
      setNestedDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdowns);
    return () => {
      document.removeEventListener('click', closeDropdowns);
    };
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <NavLink to="Home" href="#">One Way Garments</NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink to="/" href="#">Home</NavLink></li>
          <li className={`dropdown ${dropdownOpen ? 'show' : ''}`} ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>Product</div>
            {dropdownOpen && (
              <div className={`dropdown-content`}>
                <div
                  className={`nested-dropdown ${nestedDropdownOpen ? 'active' : ''}`}
                  onClick={toggleNestedDropdown}
                >
                  Casual
                  {nestedDropdownOpen && (
                    <div className={`nested-dropdown-content`}>
                      <NavLink to="/card">Top Wear</NavLink>
                      <NavLink to="/bottom" href="#">Bottom Wear</NavLink>
                    </div>
                  )}
                </div>
                <div
                  className={`nested-dropdown ${nestedDropdownOpen ? 'active' : ''}`}
                  onClick={toggleNestedDropdown}
                >
                  Formal
                  {nestedDropdownOpen && (
                    <div className={`nested-dropdown-content`}>
                      <NavLink to="/Top" href="#">Top Wear</NavLink>
                      <NavLink to="/Bottom" href="#">Bottom Wear</NavLink>
                    </div>
                  )}
                </div>
              </div>
            )}
          </li>
          <li><NavLink to="Contact Us" href="#">Contact Us</NavLink></li>
          <li><NavLink to="About Us" href="#">About Us</NavLink></li>
          <li><NavLink to ="Whish"><i className='bx bx-heart'></i></NavLink></li>
          <li><NavLink to ="Cart"><i className='bx bx-cart'></i></NavLink></li>
          <li><NavLink to="login"> <button type="submit">Login</button></NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
