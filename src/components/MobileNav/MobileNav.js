import './MobileNav.css';
import React, { useState } from 'react';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let expandedStyleTopBun = {};

  let expandedStyleBottomBun = {};

  let expandedMenuList = {};

  let expandedListItems = {};

  if (isNavExpanded) {
    expandedStyleTopBun = {
      transform: 'translate3d(0px, 6px, 0px) rotate(45deg)',
      backgroundColor: 'white',
    };
    expandedStyleBottomBun = {
      transform: 'translate3d(0px, 6px, 0px) rotate(-45deg)',
      backgroundColor: 'white',
    };

    expandedMenuList = {
      pointerEvents: 'all',
      opacity: '1',
      transition: 'none 0s ease 0s',
    };

    expandedListItems = {
      opacity: '1',
      transform: 'translateX(0px)',
    };
  }
  return (
    <div class="nav">
      <div onClick={() => setIsNavExpanded(!isNavExpanded)} class="hamburger">
        <span style={expandedStyleTopBun} class="hamburger-line"></span>
        <span
          style={expandedStyleBottomBun}
          id="hamburger-line-2"
          class="hamburger-line"
        ></span>
      </div>
      <ul style={expandedMenuList} class="nav-menu-list">
        <li style={expandedListItems}>HOME</li>
        <li style={expandedListItems}>INSTAGRAM</li>
        <li style={expandedListItems}>FACEBOOK</li>
        <li style={expandedListItems}>TWITTER</li>
        <li style={expandedListItems}>YOUTUBE</li>
        <li style={expandedListItems}>HELLO</li>
      </ul>
    </div>

    //     <nav>

    //     <input type="checkbox" id="navi-toggle"/>
    //      <label for="navi-toggle" class="hamburger">

    //          <span class="hamburger-line-straight"></span>
    //          <span id="hamburger-line-1" class="hamburger-line-straight"></span>

    //      <div class="nav-menu-container">
    //         <ul class="menu-list">
    //             <li class="menu-item">
    //                 <a class="nav-menu-links" href="#">Home</a>
    //             </li>
    //             <li class="menu-item">
    //              <a class="nav-menu-links" href="#about-me">About</a>
    //             </li>
    //             <li class="menu-item">
    //              <a class="nav-menu-links" href="#skills">Skills</a>
    //             </li>
    //             <li class="menu-item">
    //              <a class="nav-menu-links" href="#">Projects</a>
    //             </li>
    //             <li class="menu-item">
    //              <a class="nav-menu-links" href="#">Contact</a>
    //             </li>
    //         </ul>

    //      </div>
    //  </label>

    //      </nav>

    // <div>
    //   {/* <h1>Foodie</h1> */}
    //   <div
    //     className="hamburger"
    //     onClick={() => setIsNavExpanded(!isNavExpanded)}
    //   >
    //     <div style={expandedStyleTopBun} class="top-bun"></div>
    //     <div style={expandedStyleMeat} class="meat"></div>
    //     {/* <div style={expandedStyleBottomBun} class="bottom-bun"></div> */}
    //   </div>
    //   <div style={expandedNav} className="my-nav">
    //     <div className="nav-wrapper">
    //       <nav class="inner-nav">
    //         <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
    //           <i class="bi bi-house-door mobile-nav-icon"></i>
    //           HOME
    //         </a>

    //         <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
    //           <i className="bi bi-instagram mobile-nav-icon"></i>
    //           INSTAGRAM
    //         </a>

    //         <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#">
    //           {' '}
    //           <i className="bi bi-facebook mobile-nav-icon"></i>
    //           FACEBOOK
    //         </a>

    //         <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#contact">
    //           {' '}
    //           <i className="bi bi-twitter mobile-nav-icon"></i>
    //           TWITTER
    //         </a>

    //         <a onClick={() => setIsNavExpanded(!isNavExpanded)} href="#contact">
    //           {' '}
    //           <i className="bi bi-youtube mobile-nav-icon"></i>
    //           YOUTUBE
    //         </a>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
};

export default MobileNav;
