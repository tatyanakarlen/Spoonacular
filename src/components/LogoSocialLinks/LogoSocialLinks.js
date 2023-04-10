import React, { useState } from 'react';
import './LogoSocialLinks.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

// setFilteredRecipes, userInput, setUserInput
// const handleChange = (e) => {
//   setUserInput(e.target.value);
// };

const LogoSocialLinks = () => {
  const [isSearchInputExpanded, setIsSearchInputExpanded] = useState(false);

  const isMobile = useMediaQuery({
    query: '(min-width: 790px)',
  });
  return (
    <>
      <div className="logo-social-links-container">
        <div className="logo-headline">
          <h1>
            <Link to="/">CookBook</Link>
          </h1>
        </div>
        {!isSearchInputExpanded ? (
          <div className="nav-menu-items">
            <ul>
              {/* <li>
              <i className="bi bi-instagram nav-icons"></i>
            </li>
            <li>
              <i className="bi bi-facebook nav-icons"></i>
            </li>
            <li>
              <i className="bi bi-twitter nav-icons"></i>
            </li>
            <li>
              <i className="bi bi-youtube nav-icons"></i>
            </li> */}
              <li
                onClick={() => setIsSearchInputExpanded(!isSearchInputExpanded)}
              >
                <div class="search-icon-btn-nav">
                  <i class="bi bi-search"></i>
                </div>
              </li>
              <li>
                <Link className="nav-link" to="/login">
                  <i class="bi bi-person-fill auth-icon"></i>
                  Login
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/liked">
                  <i className="bi bi-heart-fill heart-icon"></i>Liked
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div class="search-input-nav">
            <input
              class="form-control nav-search-input"
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <button
              onClick={() => setIsSearchInputExpanded(!isSearchInputExpanded)}
              class="nav-search-button"
            >
              Search
            </button>
            <i
              onClick={() => setIsSearchInputExpanded(!isSearchInputExpanded)}
              class="bi bi-x close-search-x-icon"
            ></i>
          </div>
        )}
      </div>
    </>
  );
};

export default LogoSocialLinks;
