import React, { useState } from 'react';
import './LogoSocialLinks.css';
import { Link } from 'react-router-dom';

const LogoSocialLinks = ({ getRecipes }) => {
  const [isSearchInputExpanded, setIsSearchInputExpanded] = useState(false);
  const [searchBarUserInput, setSearchBarUserInput] = useState('');

  const handleChange = (e) => {
    setSearchBarUserInput(e.target.value);
  };

  return (
    <>
      <div className="logo-social-links-container">
        <div className="logo-headline">
          <h1>
            <Link to="/">CookBook</Link>
          </h1>
          {!isSearchInputExpanded ? (
            <ul class="left-nav-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/liked">My Recipes</Link>
              </li>
              <li
                onClick={() => setIsSearchInputExpanded(!isSearchInputExpanded)}
              >
                <i class="bi bi-search"></i>
              </li>
            </ul>
          ) : (
            <div class="search-input-nav">
              <input
                value={searchBarUserInput}
                onChange={handleChange}
                class="form-control nav-search-input"
                type="text"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
              <div
                onClick={(e) => getRecipes(e, searchBarUserInput)}
                class="nav-search-button"
              >
                Search
              </div>
              <i
                onClick={() => setIsSearchInputExpanded(!isSearchInputExpanded)}
                class="bi bi-x close-search-x-icon"
              ></i>
            </div>
          )}
        </div>
        <div className="nav-menu-items">
          <ul>
            <li
              className="nav-link"
              onClick={() => setIsSearchInputExpanded(!isSearchInputExpanded)}
            >
              <i class="bi bi-search nav-icon"></i>
              Search
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
