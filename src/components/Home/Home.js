import React, { useState } from 'react'
import Recipes from '../Recipes/Recipes'
import Pagination from '../Pagination/Pagination'
import SearchForm from '../SearchForm/SearchForm'
import './Home.css'
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks'


const Home = ({ currentRecipes, loading, paginate, postsPerPage, totalPosts, recipes, filteredRecipes, setFilteredRecipes }) => {
    

  return (
    <div className="Home">
    <LogoSocialLinks />
    <div className="slogan-text">
    <h2>Your best source for your favourite recipes</h2>
    </div>
    <div class="home-page-container">
     
      <h1>Search for any recipe</h1>
      <SearchForm filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes}/>
    </div>
    </div>
  )
}

export default Home
