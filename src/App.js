import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipes from './components/Recipes/Recipes';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Pagination from './components/Pagination/Pagination';
import Recipe from './components/Recipe/Recipe';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [filteredRecipes, setFilteredRecipes] = useState([])
  

  // const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
        // 'https://api.spoonacular.com/recipes/complexSearch?apiKey=2bb87e4a65e64507a35d5c178493e70a&query=italian&number=50'
      );
      setRecipes(res.data);
      console.log('this is res.data', res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  console.log('these are filtered recipes', filteredRecipes);

  // postsPerPage, totalPosts, paginate

  // get current post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // return (
  //   <div className="container mt-5">
  //     <h1 className="text-primary mb-3">Recipe app</h1>
  //     <Posts posts={currentPosts}/>
  //     <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
  //   </div>
  // );

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
          <Route path="/recipes/:recipeId" element={<Recipe filteredRecipes={filteredRecipes} />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;
