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
  console.log('authStatus from nav', authStatus)

  const handleChange = (e) => {
    setSearchBarUserInput(e.target.value);
    console.log(searchBarUserInput.length);
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
          <h2>
            <Link to="/">CookBook</Link>
          </h2>
          <ul class="left-nav-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/liked">My Recipes</Link>
            </li>
            <li onClick={() => console.log(console.log('user ID', auth?.currentUser))}>
             Check user
            </li>
          </ul>
        </div>
        <div className="nav-menu-items">
          <ul>
            <li className="nav-link label-enclose">
              <label
                for="fldSearch"
                onClick={(e) => {
                  setIsSearchInputExpanded(!isSearchInputExpanded);
                  if (isSearchInputExpanded && ref.current.value !== '') {
                    // console.log(
                    //   'logic check',
                    //   isSearchInputExpanded,
                    //   searchBarUserInput.length
                    // );

                    getRecipes(e, searchBarUserInput);
                    setIsSearchInputExpanded(!isSearchInputExpanded);
                    onClear();
                  } else {
                    setIsSearchInputExpanded(!isSearchInputExpanded);
                  }
                }}
              >
                <i class="bi bi-search nav-icon search-icon"></i>
                Search
              </label>
              <div id="input-enclose">
                <input
                  ref={ref}
                  onClick={() => console.log(ref.current)}
                  // value={searchBarUserInput}
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter Keyword"
                  // id="fldSearch"
                  style={openInputStyle}
                />
              </div>
            </li>

            {userAuthButton}
          </ul>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
