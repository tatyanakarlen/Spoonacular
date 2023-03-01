import React, { useState } from 'react';
import Recipes from './components/Recipes/Recipes';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // get current post pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // change page pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                filteredRecipes={filteredRecipes}
                setFilteredRecipes={setFilteredRecipes}
                recipes={recipes}
                currentRecipes={currentRecipes}
                loading={loading}
                postsPerPage={postsPerPage}
                totalPosts={recipes.length}
                paginate={paginate}
              />
            }
          />
          <Route
            exact
            path="/recipes"
            element={
              <Recipes
                filteredRecipes={filteredRecipes}
                recipes={recipes}
                currentRecipes={currentRecipes}
                loading={loading}
                postsPerPage={postsPerPage}
                totalPosts={filteredRecipes.length}
                paginate={paginate}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route
            path="/recipes/:recipeId"
            element={
              <Recipe
                filteredRecipes={filteredRecipes}
                setLoading={setLoading}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
