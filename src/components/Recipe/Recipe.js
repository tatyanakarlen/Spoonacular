import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './Recipe.css';
import star from '../../Assets/icons8-star-48.png';
import MobileNav from '../MobileNav/MobileNav';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const Recipe = ({
  setLoading,
  loading,
  likedRecipes,
  setLikedRecipes,
  isRecipeLiked,
  setIsRecipeLiked,
}) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  let idAsNum = Number(recipeId);
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

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
      if (likedRecipes.some((recipe) => recipe.id === currentRecipeId)) {
        console.log(
          'recipe is in liked',
          likedRecipes,
          'isrecipeLiked?',
          isRecipeLiked
        );
        setIsRecipeLiked(true);
      } else {
        setIsRecipeLiked(false);
        console.log(
          'recipe is not in liked',
          likedRecipes,
          'isrecipeLiked?',
          isRecipeLiked
        );
      }
      return function cleanup() {
        setIsRecipeLiked(false);
      };
    };
    isCurrentRecipeLiked();
  });

  const toggleLike = () => {
    if (isRecipeLiked) {
      const currentRecipeId = recipe.id;
      setLikedRecipes(
        likedRecipes.filter((recipe) => recipe.id !== currentRecipeId)
      );
      setIsRecipeLiked(false);
    } else {
      const likedRecipe = Object.assign({}, recipe);
      setLikedRecipes([...likedRecipes, likedRecipe]);
      setIsRecipeLiked(true);
    }
  };

  console.log('these are liked recipes', likedRecipes);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {isMobile ? <MobileNav /> : <LogoSocialLinks />}
          {!isMobile && (
            <div className="recipe-id-page-breadcrumb margin">
              <Link to="/">HOME</Link>&nbsp;&nbsp;
              <i className="bi bi-chevron-right"></i>
              &nbsp;&nbsp;YOUR RECIPES<i className="bi bi-chevron-right"></i>
              &nbsp;&nbsp;{recipe.title}
            </div>
          )}
          <div className="recipe-container">
            <div class="title-like-heart-container">
              <h1 onClick={toggleLike} className="single-recipe-title">
                {recipe.title}
              </h1>
              <div
                onClick={toggleLike}
                class={isRecipeLiked ? 'like-button liked' : 'like-button'}
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
          <Footer />
        </div>
      )}
    </>
  );
};

export default Recipe;
