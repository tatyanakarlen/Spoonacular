import './MobileNav.css';
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useGetAuthStatus } from '../../hooks/useGetAuthStatus';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase-config';

const MobileNav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // hook for getting auth status
  const { authStatus } = useGetAuthStatus();

  // firebase log out
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const userAuthButton = useMemo(() => {
    switch (authStatus) {
      case 'LOADING':
        return <Link></Link>;
      case 'AUTHENTICATED':
        return <Link onClick={logOut}>LOGOUT</Link>;
      case 'UNAUTHENTICATED':
        return <Link to="/login">LOGIN</Link>;
      default:
        return <div></div>;
    }
  }, [authStatus]);

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
          <li style={expandedListItems}>{userAuthButton}</li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
