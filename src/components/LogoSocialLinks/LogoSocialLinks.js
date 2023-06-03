import React, { useState, useRef } from 'react';
import './LogoSocialLinks.css';
import { Link } from 'react-router-dom';

const LogoSocialLinks = ({ getRecipes }) => {
  const [isSearchInputExpanded, setIsSearchInputExpanded] = useState(false);
  const [searchBarUserInput, setSearchBarUserInput] = useState('');

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

  const ref = useRef(null);
  const onClear = () => {
    ref.current.value = '';
  };

  return (
    <>
      <div className="logo-social-links-container">
        <div className="logo-headline">
          <h1>
            <Link to="/">CookBook</Link>
          </h1>
          <ul class="left-nav-menu">
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

            <li class="login-btn">
              <Link className="nav-link" to="/login">
                <i class="bi bi-person-fill nav-icon"></i>
                login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LogoSocialLinks;
