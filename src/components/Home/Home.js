import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Home.css';
import Footer from '../Footer/Footer.js';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import CookBookBrandHeading from '../CookBookBrandHeading/CookBookBrandHeading';
import MobileNav from '../MobileNav/MobileNav';

import { useMediaQuery } from 'react-responsive';

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
      {isMobile ? <MobileNav /> : <LogoSocialLinks />}
      <div className="home-page-container">
        <div className="form-container">
          <h1>Enter your desired cuisine</h1>
          <SearchForm
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
