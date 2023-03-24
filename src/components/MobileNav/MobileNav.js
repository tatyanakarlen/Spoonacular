import './MobileNav.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  let expandedStyleTopBun = {};

  let expandedStyleBottomBun = {};

  let expandedMenuList = {};

  let expandedListItems = {};

  let visibleSearchIcon = {};

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

    visibleSearchIcon = {
      opacity: '0',
    };
  }
  return (
    <>
      <div className="nav">
        <div
          onClick={() => setIsNavExpanded(!isNavExpanded)}
          className="hamburger"
        >
          <span style={expandedStyleTopBun} className="hamburger-line"></span>
          <span
            style={expandedStyleBottomBun}
            id="hamburger-line-2"
            className="hamburger-line"
          ></span>
        </div>
        <h1 className="foodie-header">CookBook</h1>
        <ul style={expandedMenuList} className="nav-menu-list">
          <li style={expandedListItems}>
            <Link to="/">HOME</Link>
          </li>
          <li style={expandedListItems}>
            <Link to="/liked">LIKED</Link>
          </li>

          <li style={expandedListItems}>INSTAGRAM</li>
          <li style={expandedListItems}>FACEBOOK</li>
          <li style={expandedListItems}>TWITTER</li>
          <li style={expandedListItems}>YOUTUBE</li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
