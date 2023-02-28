import React, { useState } from 'react'
import Recipes from './Recipes'
import Pagination from './Pagination'
import SearchForm from './SearchForm'

const Home = ({ currentRecipes, loading, paginate, postsPerPage, totalPosts, recipes, filteredRecipes, setFilteredRecipes }) => {
    

  return (
    <div>
      RECIPE APP
      <SearchForm filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes}/>
      {/* <Recipes currentRecipes={currentRecipes} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={recipes.length} paginate={paginate}/> */}
    </div>
  )
}

export default Home
