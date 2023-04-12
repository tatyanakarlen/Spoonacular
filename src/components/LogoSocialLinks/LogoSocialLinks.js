import React, { useState } from 'react';
import './LogoSocialLinks.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//  filteredRecipes={filteredRecipes}
// setFilteredRecipes={setFilteredRecipes}
// userInput={userInput}
// setUserInput={setUserInput}

// const handleChange = (e) => {
//   setUserInput(e.target.value);
// };

const LogoSocialLinks = ({
  getRecipes,
  userInput,
  setUserInput,
  setFilteredRecipes,
}) => {
  const [isSearchInputExpanded, setIsSearchInputExpanded] = useState(false);
  const [searchBarUserInput, setSearchBarUserInput] = useState('');

  const handleChange = (e) => {
    setSearchBarUserInput(e.target.value);
  };

  const navigate = useNavigate();

  async function getRecipes(e) {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${searchBarUserInput}&number=10`
      );
      setFilteredRecipes(res.data.results);
      navigate('/recipes');
      setUserInput(searchBarUserInput);
      setIsSearchInputExpanded(false);
    } catch (err) {
      console.log("couldn't fetch recipes");
    }
  }

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
              value={searchBarUserInput}
              onChange={handleChange}
              class="form-control nav-search-input"
              type="text"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="addon-wrapping"
            />
            <button onClick={getRecipes} class="nav-search-button">
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
