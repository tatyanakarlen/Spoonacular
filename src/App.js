import React, { useState } from 'react';
import Recipes from './components/Recipes/Recipes';
import './App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
import LogoSocialLinks from './components/LogoSocialLinks/LogoSocialLinks';
import MobileNav from './components/MobileNav/MobileNav';
import Auth from './components/Auth/Auth';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [isRecipeLiked, setIsRecipeLiked] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

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

  const navigate = useNavigate();


  async function getRecipes(e, query) {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}&number=10`
      );
      setFilteredRecipes(res.data.results);
      navigate('/recipes');
    } catch (err) {
      console.log("couldn't fetch recipes");
    }
  }

  // const getLikedRecipes = async () => {
  //   try {
  //     const data = await getDocs(likedRecipesCollectionRef);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setLikedRecipes(filteredData);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      {isMobile ? (
        <MobileNav />
      ) : (
        <LogoSocialLinks
          getRecipes={getRecipes}
          setFilteredRecipes={setFilteredRecipes}
          userInput={userInput}
          setUserInput={setUserInput}
        />
      )}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              getRecipes={getRecipes}
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
          path="/liked/:recipeId"
          exact
          element={
            <LikedRecipe
              likedRecipes={likedRecipes}
              setLikedRecipes={setLikedRecipes}
            />
          }
        />

        <Route
          path="/liked"
          element={
            <LikedRecipes
              loading={loading}
              setLoading={setLoading}
              likedRecipes={likedRecipes}
              setLikedRecipes={setLikedRecipes}
            />
          }
        />

        <Route path="/login" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
