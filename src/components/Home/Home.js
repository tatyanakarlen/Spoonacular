import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Home.css';
import Footer from '../Footer/Footer.js';
import { useMediaQuery } from 'react-responsive';
import  breakfast from '../../Assets/breakfast.png'
import lunch from '../../Assets/lunch.png'
import dinner from '../../Assets/dinner.png'

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
        class="home-page-container"
        className={
          isMobile ? 'home-page-container' : 'home-page-container margin'
        }
      >
        <div class="landing-page-content">
          <h1>Search, browse and save</h1>
          <h1>your favourite recipes</h1>
          <br/>
          <p>Not sure what to have for dinner tonight? Your digital CookBook has you covered!</p>
          <br/>
          <SearchForm  filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
            userInput={userInput}
            setUserInput={setUserInput}/>
             <br/>
            <div class="meal-options-container">
            <figure class="meal-option">
  <img class="breakfast-img" src={breakfast}/>
  <figcaption class="caption">Breakfast</figcaption>
</figure>
            
                <figure class="meal-option">
  <img class="lunch-img" src={lunch}/>
  <figcaption class="caption">Lunch</figcaption>
</figure>
            
              <figure class="meal-option">
  <img class="dinner-img" src={dinner}/>
  <figcaption class="caption">Dinner</figcaption>
</figure>
            </div>
        </div>
        <div class="landing-page-content">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.{' '}
        </div>
      
      </div>
      <Footer />
    </div>
  );
};

export default Home;
