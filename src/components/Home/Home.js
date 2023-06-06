import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Home.css'; 
import { useMediaQuery } from 'react-responsive';
import breakfastImg from '../../Assets/breakfast.png';
import lunchImg from '../../Assets/lunch.png';
import dinnerImg from '../../Assets/dinner.png';
import salad from '../../Assets/salad.png';
import salmon from '../../Assets/food1.png';

const Home = ({
  filteredRecipes,
  setFilteredRecipes,
  userInput,
  setUserInput,
  getRecipes,
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });
  return (
    <div className="Home">
      <div className="home-page-container">
        <div class="landing-page-content left-side-content">
          <h5>Digital Cookbook</h5>
          <h1>
            Quick And Tasty Meal <span>Ideas</span>
          </h1>
          <p>
            What's for dinner tonight?{' '}
            <span class="cookbook-highlight">CookBook</span> has you covered.
          </p>

          {/* <div class="search-form-cover">
            <div class="tb">
              <div class="td">
                <input
                  class="search-form-input"
                  type="text"
                  placeholder="Search"
                  required
                />
              </div>
              <div class="td" id="s-cover">
                <button class="search-form-submit-button" type="submit">
                  <div id="s-circle"></div>
                  <span></span>
                </button>
              </div>
            </div>
          </div> */}

          <SearchForm
            getRecipes={getRecipes}
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
            userInput={userInput}
            setUserInput={setUserInput}
          />

          <div class="meal-options-container">
            <figure
              onClick={(e) => getRecipes(e, 'breakfast')}
              class="meal-option breakfast-figure"
            >
              <img class="breakfast-img" src={breakfastImg} />
              <figcaption class="caption">Breakfast</figcaption>
            </figure>

            <figure
              onClick={(e) => getRecipes(e, 'lunch')}
              class="meal-option lunch-figure"
            >
              <img class="lunch-img" src={lunchImg} />
              <figcaption class="caption">Lunch</figcaption>
            </figure>

            <figure
              onClick={(e) => getRecipes(e, 'dinner')}
              class="meal-option dinner-figure"
            >
              <img class="dinner-img" src={dinnerImg} />
              <figcaption class="caption">Dinner</figcaption>
            </figure>
          </div>
        </div>
        <div class="landing-page-content right-side-content">
          <ul class="social-links">
            <li class="social-icon">
              <i class="bi bi-facebook"></i>
            </li>
            <li class="social-icon">
              <i class="bi bi-instagram"></i>
            </li>
            <li class="social-icon">
              <i class="bi bi-youtube"></i>
            </li>
            <li class="social-icon">
              <i class="bi bi-twitch"></i>
            </li>
          </ul>
          <img src={salad} />
          <div onClick={(e) => getRecipes(e, '')} class="view-all-recipes">
            <h5>View All Recipes</h5>

            <img src={salmon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
