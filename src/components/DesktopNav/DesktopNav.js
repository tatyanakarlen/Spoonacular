import React, { useState, useRef, useMemo } from 'react';
import { auth } from '../../config/firebase-config';
import { signOut } from 'firebase/auth';
import './DesktopNav.css';
import { Link } from 'react-router-dom';
import { useGetAuthStatus } from '../../hooks/useGetAuthStatus';

const DesktopNav = ({ getRecipes }) => {
  const [isSearchInputExpanded, setIsSearchInputExpanded] = useState(false);
  const [searchBarUserInput, setSearchBarUserInput] = useState('');

  // hook for getting auth status
  const { authStatus } = useGetAuthStatus();
  

  const handleChange = (e) => {
    setSearchBarUserInput(e.target.value);
  };

  let openInputStyle = {};

  if (isSearchInputExpanded) {
    openInputStyle = {
      width: '20rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      outline: 'none',
    };
  }

  // firebase log out
  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const ref = useRef(null);
  const onClear = () => {
    ref.current.value = '';
  };

  const userAuthButtonStyles = {
    backgroundColor: 'grey'
  }

  const userAuthButton = useMemo(() => {
    switch (authStatus) {
      case 'LOADING':
        return (
          <Link className="nav-link">
            <i class="bi bi-person-fill nav-icon"></i>
          </Link>
        );
      case 'AUTHENTICATED':
        return (
          <Link className="nav-link" onClick={logOut}>
            <i class="bi bi-person-fill nav-icon"></i>
            logout
          </Link>
        );
      case 'UNAUTHENTICATED':
        return (
          <Link className="nav-link" to="/login">
            <i class="bi bi-person-fill nav-icon"></i>
            login
          </Link>
        );
      default:
        return <div></div>;
    }
  }, [authStatus]);

  return (
    <>
      <div className="logo-social-links-container">
        <div className="logo-headline">
          <h1>
            <Link to="/">CookBook</Link>
          </h1>
          <ul className="left-nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/liked">My Recipes</Link>
            </li>
          </ul>
        </div>
        <div className="nav-menu-items">
          <ul>
            <li id="desktop-nav-search-bar" className="nav-link label-enclose">
              <label
                htmlFor="fldSearch"
                onClick={(e) => {
                  setIsSearchInputExpanded(!isSearchInputExpanded);
                  if (isSearchInputExpanded && ref.current.value !== '') {
                    getRecipes(e, searchBarUserInput);
                    setIsSearchInputExpanded(!isSearchInputExpanded);
                    onClear();
                  } else {
                    setIsSearchInputExpanded(!isSearchInputExpanded);
                  }
                }}
              >
                <i className="bi bi-search nav-icon search-icon"></i>
                Search
              </label>
              <div id="input-enclose">
                <input
                  ref={ref}
                  onClick={() => console.log(ref.current)}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Keyword"
                  style={openInputStyle}
                />
              </div>
            </li>
            <li id="user-auth-btn">
            {userAuthButton}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
