import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Recipe.css';
import star from '../../Assets/icons8-star-48.png';
import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../config/firebase-config';
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  where,
  query,
} from 'firebase/firestore';

const Recipe = ({
  setLoading,
  loading,
  likedRecipes,
  setLikedRecipes,
  isRecipeLiked,
  setIsRecipeLiked,
}) => {
  const { recipeId } = useParams();

  const navigate = useNavigate();

  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  let idAsNum = Number(recipeId);
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });
  const likedRecipesCollectionRef = collection(db, 'userLikedRecipes');
  


  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${idAsNum}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
      );
      setRecipe(res.data);
      const res1 = await axios.get(
        `https://api.spoonacular.com/recipes/${idAsNum}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      setIngredients(res1.data.ingredients);
      setSteps(res.data?.analyzedInstructions[0]?.steps);
      setLoading(false);
    };
    fetchRecipe();
  }, []);

  useEffect(() => {
    const isCurrentRecipeLiked = () => {
      let currentRecipeId = recipe.id;

      if (
        likedRecipes.some((recipe) => recipe.spoonacularId === currentRecipeId)
      ) {
        setIsRecipeLiked(true);
      } else {
        setIsRecipeLiked(false);
      }
      return function cleanup() {
        setIsRecipeLiked(false);
      };
    };
    isCurrentRecipeLiked();
  });

  const toggleLike = async () => {
    if (auth.currentUser === null) {
      navigate('/login');
      return;
    } else if (!isRecipeLiked) {
      const currentRecipe = recipe;
      const likedRecipe = {
        title: currentRecipe.title,
        introParagaph:
          'This delicious recipe is a quick and easy meal that is sure to impress.The rich texture and savory taste combine perfectly for delicious and healthy meal',
        spoonacularId: currentRecipe.id,
        likedByUserId: auth?.currentUser?.uid,
        ingredients: ingredients,
        steps: steps,
        image: currentRecipe.image,
        glutenFree: currentRecipe.glutenFree,
        vegan: currentRecipe.vegan,
        vegetarian: currentRecipe.vegetarian,
        dairyFree: currentRecipe.dairyFree,
        lowFodmap: currentRecipe.lowFodmap,
        veryHealthy: currentRecipe.veryHealthy,
      };

      try {
        await addDoc(likedRecipesCollectionRef, likedRecipe);
        setLikedRecipes([...likedRecipes, likedRecipe]);
      } catch (err) {
        console.error(err);
      }
    } else {
      const recipeId = recipe.id;
      const q = query(
        likedRecipesCollectionRef,
        where('spoonacularId', '==', recipeId)
      );
      const doc_refs = await getDocs(q);
      const res = [];
      doc_refs.forEach((recipe) => {
        res.push({
          id: recipe.id,
          ...recipe.data(),
        });
      });
      const recipeToDeleteDoc = doc(db, 'userLikedRecipes', res[0].id);
      await deleteDoc(recipeToDeleteDoc);
      setLikedRecipes(
        likedRecipes.filter(
          (recipe) => recipe.spoonacularId !== res[0].spoonacularId
        )
      );
      return res;
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {!isMobile && (
            <div className="liked-recipes-breadcrumb">
            <div className="recipe-breadcrumb-content">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <Link to="/recipes">Recipes</Link>
              <i className="bi bi-chevron-right"></i>
              <span style={{marginLeft: '0'}}>{recipe.title}</span>
            </div>
           
          </div>
          )}
          <div className="recipe-container">
            <div className="title-like-heart-container">
              <h1 className="single-recipe-title">{recipe.title}</h1>
              <div
                onClick={toggleLike}
                className={isRecipeLiked ? 'like-button liked' : 'like-button'}
              ></div>
            </div>
            <div className="star-icon-container">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <h5 onClick={() => console.log('is recipe liked', isRecipeLiked)}>
                5 STARS / 75 REVIEWS
              </h5>
            </div>

            <p className="recipe-headline">
              This delicious recipe is a quick and easy meal that is sure to
              impress. The rich texture and savory taste combine perfectly for a
              delicious and healthy meal.
            </p>
            <a className="jump-to-instructions-link" href="#instructions">
              <div className="jump-to-instructions">
                <i className="bi bi-arrow-down-short"></i>&nbsp;
                <div>Jump to cooking instructions</div>
              </div>
            </a>
            <img src={recipe.image} alt="recipe"></img>
            <h1 className="recipe-heading">Health Information</h1>
            <h3 className="health-info">
              Gluten free:{' '}
              <span style={{ color: !recipe.glutenFree ? 'red' : 'green' }}>
                {!recipe.glutenFree ? 'No' : 'Yes'}
              </span>
            </h3>
            <h3 className="health-info">
              Vegan:{' '}
              <span style={{ color: !recipe.vegan ? 'red' : 'green' }}>
                {!recipe.vegan ? 'No' : 'Yes'}
              </span>
            </h3>
            <h3 className="health-info">
              Vegeterian:{' '}
              <span style={{ color: !recipe.vegetarian ? 'red' : 'green' }}>
                {!recipe.vegetarian ? 'No' : 'Yes'}
              </span>
            </h3>
            <h3 className="health-info">
              Dairy-free:{' '}
              <span style={{ color: !recipe.dairyFree ? 'red' : 'green' }}>
                {!recipe.dairyFree ? 'No' : 'Yes'}
              </span>
            </h3>
            <h3 className="health-info">
              Low FODMAP:{' '}
              <span style={{ color: !recipe.lowFodMap ? 'red' : 'green' }}>
                {!recipe.lowFodMap ? 'No' : 'Yes'}
              </span>
            </h3>
            <h3 className="health-info">
              Very healthy:{' '}
              <span style={{ color: !recipe.veryHealthy ? 'red' : 'green' }}>
                {!recipe.veryHealthy ? 'No' : 'Yes'}
              </span>
            </h3>
            <h1 className="recipe-heading">Ingredients</h1>
            {ingredients.map((ingredient, index) => (
              <ul className="ingredients-list">
                <li key={index}>
                  {ingredient.name},{' '}
                  <span>
                    {ingredient.amount.metric.value}
                    &nbsp;
                    {ingredient.amount.metric.unit}
                  </span>
                </li>
              </ul>
            ))}
            <h1 id="instructions" className="recipe-heading">
              Instructions
            </h1>
            <ul className="instructions-list">
              {steps.map((step, index) => (
                <li key={index}>
                  {step.number}.&nbsp;{step.step}
                </li>
              ))}
            </ul>
          </div>
        
        </div>
      )}
    </>
  );
};

export default Recipe;
