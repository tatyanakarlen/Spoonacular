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
  const isTablet = useMediaQuery({
    query: '(max-width: 1031px)',
  });
  return (
    <div className="Home">
      <div className="home-page-container">
        <div className="container landing-page-content left-side-content">
          <h5>Digital Cookbook</h5>
          <h1>
            Quick And Tasty Meal <span>Ideas</span>
          </h1>
          <p>
            What's for dinner tonight?{' '}
            <span className="cookbook-highlight">CookBook</span> has you
            covered.
          </p>

          <SearchForm
            getRecipes={getRecipes}
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
            userInput={userInput}
            setUserInput={setUserInput}
          />

          <div className="meal-options-container">
            <figure
              onClick={(e) => getRecipes(e, 'breakfast')}
              className="meal-option breakfast-figure"
            >
              <img className="breakfast-img" src={breakfastImg} />
              <figcaption className="caption">Breakfast</figcaption>
            </figure>

            <figure
              onClick={(e) => getRecipes(e, 'lunch')}
              className="meal-option lunch-figure"
            >
              <img className="lunch-img" src={lunchImg} />
              <figcaption className="caption">Lunch</figcaption>
            </figure>

            <figure
              onClick={(e) => getRecipes(e, 'dinner')}
              className="meal-option dinner-figure"
            >
              <img className="dinner-img" src={dinnerImg} />
              <figcaption className="caption">Dinner</figcaption>
            </figure>
          </div>
        </div>
        <div className="landing-page-content right-side-content">
          <div className="salad-img-container">
            <ul className="social-links">
              <li className="social-icon">
                <i className="bi bi-facebook"></i>
              </li>
              <li className="social-icon">
                <i className="bi bi-instagram"></i>
              </li>
              <li className="social-icon">
                <i className="bi bi-youtube"></i>
              </li>
              <li className="social-icon">
                <i className="bi bi-twitch"></i>
              </li>
            </ul>

            <img src={salad} />
            {!isTablet && (
              <div
                onClick={(e) => getRecipes(e, '')}
                className="view-all-recipes"
              >
                <h5>View All Recipes</h5>

                <img src={salmon} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
