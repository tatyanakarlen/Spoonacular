import './MobileNav.css';
import React, { useState } from 'react';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  //   style props

  let expandedStyleTopBun = {};

  let expandedStyleBottomBun = {};

  let expandedStyleMeat = {};

  //   possible hamburger too
  let expandedNav = {};

  if (isNavExpanded) {
    expandedStyleTopBun = {
      transform: 'rotate(-45deg)',
      marginTop: '25px',
      backgroundColor: 'white',
    };
    expandedStyleBottomBun = {
      opacity: '0',
      transform: 'rotate(45deg)',
    };
    expandedStyleMeat = {
      transform: 'rotate(45deg)',
      marginTop: '-7px',
      backgroundColor: 'white',
    };
    expandedNav = {
      top: '0',
      transform: 'scale(1)',
    };
  }
  return (
    <div>
      {/* <h1>Foodie</h1> */}
      <div
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        <div style={expandedStyleTopBun} class="top-bun"></div>
        <div style={expandedStyleMeat} class="meat"></div>
        {/* <div style={expandedStyleBottomBun} class="bottom-bun"></div> */}
      </div>
      <div style={expandedNav} className="my-nav">
        <div className="nav-wrapper">
          <nav class="inner-nav">
            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
              <i class="bi bi-house-door mobile-nav-icon"></i>
              HOME
            </a>

            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
              <i className="bi bi-instagram mobile-nav-icon"></i>
              INSTAGRAM
            </a>

            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
              {' '}
              <i className="bi bi-facebook mobile-nav-icon"></i>
              FACEBOOK
            </a>

            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#contact">
              {' '}
              <i className="bi bi-twitter mobile-nav-icon"></i>
              TWITTER
            </a>

            <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#contact">
              {' '}
              <i className="bi bi-youtube mobile-nav-icon"></i>
              YOUTUBE
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
