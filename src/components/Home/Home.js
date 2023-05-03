import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Home.css';
import Footer from '../Footer/Footer.js';
import { useMediaQuery } from 'react-responsive';
import breakfast from '../../Assets/breakfast.png';
import lunch from '../../Assets/lunch.png';
import dinner from '../../Assets/dinner.png';
import food from '../../Assets/salad.png';

const Home = ({
  filteredRecipes,
  setFilteredRecipes,
  userInput,
  setUserInput,
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });
  return (
    <div className="Home">
      <div
        className="home-page-container"
        className={
          isMobile ? 'home-page-container' : 'home-page-container margin'
        }
      >
        <div class="landing-page-content">
          <p>
            Search, browse, save
            <br /> <span>your favourite recipes</span>
          </p>
          <br />

          <div class="search-form-cover">
       
       <div class="tb">
         <div class="td"><input class="search-form-input" type="text" placeholder="Search" required/></div>
         <div class="td" id="s-cover">
           <button class="search-form-submit-button" type="submit">
             <div id="s-circle"></div>
             <span></span>
           </button>
         </div>
       </div>
    
   </div>

          {/* <SearchForm
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
            userInput={userInput}
            setUserInput={setUserInput}
          /> */}
          <br />
          <div class="meal-options-container">
            <figure class="meal-option breakfast-figure">
              <img class="breakfast-img" src={breakfast} />
              <figcaption class="caption">Breakfast</figcaption>
            </figure>

            <figure class="meal-option lunch-figure">
              <img class="lunch-img" src={lunch} />
              <figcaption class="caption">Lunch</figcaption>
            </figure>

            <figure class="meal-option dinner-figure">
              <img class="dinner-img" src={dinner} />
              <figcaption class="caption">Dinner</figcaption>
            </figure>
          </div>
        </div>
        <div class="landing-page-content">
          <img class="landing-page-img" src={food}></img>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
