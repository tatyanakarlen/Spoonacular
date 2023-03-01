import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './Home.css';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';

const Home = ({ filteredRecipes, setFilteredRecipes }) => {
  return (
    <div className="Home">
      <LogoSocialLinks />
      <div class="home-page-container">
        <div className="form-container">
          <h1>Enter your desired cuisine</h1>
          <SearchForm
            filteredRecipes={filteredRecipes}
            setFilteredRecipes={setFilteredRecipes}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
