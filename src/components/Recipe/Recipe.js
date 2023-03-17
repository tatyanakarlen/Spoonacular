import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './Recipe.css';
import star from '../../Assets/icons8-star-48.png';
import MobileNav from '../MobileNav/MobileNav';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { useMediaQuery } from 'react-responsive';

const Recipe = ({ setLoading, loading, likedRecipes, setLikedRecipes }) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [likedHeartActive, setlikedHeartActive] = useState(false);
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

  const addToLikes = () => {
    const likedRecipe = Object.assign({}, recipe);
    console.log(likedRecipe);
    setLikedRecipes([...likedRecipes, likedRecipe]);
  };

  console.log('likedheart', likedHeartActive);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {isMobile ? <MobileNav /> : <LogoSocialLinks />}
          {!isMobile && (
            <div className="recipe-id-page-breadcrumb margin">
              COOKBOOK&nbsp;&nbsp;<i className="bi bi-chevron-right"></i>
              &nbsp;&nbsp;YOUR RECIPES<i className="bi bi-chevron-right"></i>
              &nbsp;&nbsp;{recipe.title}
            </div>
          )}
          <div className="recipe-container">
            <h1 className="single-recipe-title">{recipe.title}</h1>
            <div className="star-icon-container">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <h5>5 STARS / 75 REVIEWS</h5>
            </div>
            <div
              onClick={() => {
                addToLikes();
                setlikedHeartActive(!likedHeartActive);
              }}
              class={likedHeartActive ? 'like-button liked' : 'like-button'}
            ></div>

            <p className="recipe-headline">
              This delicious recipes is a quick and easy meal that is sure to
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
