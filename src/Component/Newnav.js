import React, { useState } from 'react';
import './Newnav.css'; // Import your CSS file

function YourComponentName() {
  const [isInputShown, setInputShown] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isHtmlCssSubMenuOpen, setHtmlCssSubMenuOpen] = useState(false);
  const [isMoreSubMenuOpen, setMoreSubMenuOpen] = useState(false);
  const [isJsSubMenuOpen, setJsSubMenuOpen] = useState(false);

  const toggleInput = () => {
    setInputShown(!isInputShown);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleHtmlCssSubMenu = () => {
    setHtmlCssSubMenuOpen(!isHtmlCssSubMenuOpen);
  };

  const toggleMoreSubMenu = () => {
    setMoreSubMenuOpen(!isMoreSubMenuOpen);
  };

  const toggleJsSubMenu = () => {
    setJsSubMenuOpen(!isJsSubMenuOpen);
  };

  return (
    <div>
      <nav>
        <div className={`navbar ${isInputShown ? 'showInput' : ''}`}>
          <i className={`bx ${isInputShown ? 'bx-x' : 'bx-search'}`} onClick={toggleInput}></i>
          <div className="logo"><a href="#">CodingLab</a></div>
          <div className="nav-links">
            <div className="sidebar-logo">
              <span className="logo-name">CodingLab</span>
              <i className="bx bx-x" onClick={toggleSidebar}></i>
            </div>
            <ul className={`links ${isHtmlCssSubMenuOpen ? 'show1' : ''} ${isJsSubMenuOpen ? 'show3' : ''}`}>
              <li><a href="#">HOME</a></li>
              <li>
                <a href="#">HTML & CSS</a>
                <i className={`bx bxs-chevron-down htmlcss-arrow arrow ${isHtmlCssSubMenuOpen ? 'active' : ''}`} onClick={toggleHtmlCssSubMenu}></i>
                <ul className={`htmlCss-sub-menu sub-menu ${isMoreSubMenuOpen ? 'show2' : ''}`}>
                  <li><a href="#">Web Design</a></li>
                  <li><a href="#">Login Forms</a></li>
                  <li><a href="#">Card Design</a></li>
                  <li className="more">
                    <span><a href="#">More</a>
                    <i className={`bx bxs-chevron-right arrow more-arrow ${isMoreSubMenuOpen ? 'active' : ''}`} onClick={toggleMoreSubMenu}></i>
                  </span>
                    <ul className="more-sub-menu sub-menu">
                      <li><a href="#">Neumorphism</a></li>
                      <li><a href="#">Pre-loader</a></li>
                      <li><a href="#">Glassmorphism</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">JAVASCRIPT</a>
                <i className={`bx bxs-chevron-down js-arrow arrow ${isJsSubMenuOpen ? 'active' : ''}`} onClick={toggleJsSubMenu}></i>
                <ul className="js-sub-menu sub-menu">
                  <li><a href="#">Dynamic Clock</a></li>
                  <li><a href="#">Form Validation</a></li>
                  <li><a href="#">Card Slider</a></li>
                  <li><a href="#">Complete Website</a></li>
                </ul>
              </li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
            </ul>
          </div>
          <div className="search-box">
            <i className="bx bx-search" onClick={toggleInput}></i>
            <div className="input-box">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default YourComponentName;
