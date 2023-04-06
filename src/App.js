import React, { useState, useEffect } from 'react';
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
import LikedRecipes from './components/LikedRecipes/LikedRecipes';
import LikedRecipe from './components/LikedRecipe/LikedRecipe';
import Auth from './components/Auth/Auth';
import { db } from './config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
// how to import function

function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [isRecipeLiked, setIsRecipeLiked] = useState(false);

  //firestore data ref
  const likedRecipesCollectionRef = collection(db, 'userLikedRecipes');

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

  const getLikedRecipes = async () => {
    try {
      const data = await getDocs(likedRecipesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLikedRecipes(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLikedRecipes();
  }, []);

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
                currentRecipes={currentRecipes}
                loading={loading}
                postsPerPage={postsPerPage}
                paginate={paginate}
                userInput={userInput}
                setUserInput={setUserInput}
              />
            }
          />
          <Route
            exact
            path="/recipes"
            element={
              <Recipes
                filteredRecipes={filteredRecipes}
                currentRecipes={currentRecipes}
                loading={loading}
                postsPerPage={postsPerPage}
                totalPosts={filteredRecipes.length}
                paginate={paginate}
                userInput={userInput}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route
            path="/recipes/:recipeId"
            element={
              <Recipe
                filteredRecipes={filteredRecipes}
                loading={loading}
                setLoading={setLoading}
                likedRecipes={likedRecipes}
                setLikedRecipes={setLikedRecipes}
                isRecipeLiked={isRecipeLiked}
                setIsRecipeLiked={setIsRecipeLiked}
              />
            }
          />

          <Route
            path="/liked"
            element={<LikedRecipes likedRecipes={likedRecipes} />}
          />
          <Route
            path="/liked/:recipeId"
            element={
              <LikedRecipe
                likedRecipes={likedRecipes}
                setLikedRecipes={setLikedRecipes}
              />
            }
          />
          <Route path="/login" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
