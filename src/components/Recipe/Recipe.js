import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './Recipe.css';
import star from '../../Assets/icons8-star-48.png';

const Recipe = ({ setLoading }) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  let idAsNum = Number(recipeId);

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

  return (
    <div>
      <LogoSocialLinks />
      <div class="recipe-id-page-breadcrumb">
        FOODIE&nbsp;&nbsp;<i class="bi bi-chevron-right"></i>&nbsp;&nbsp;YOUR
        RECIPES<i class="bi bi-chevron-right"></i>&nbsp;&nbsp;{recipe.title}
      </div>
      <div className="recipe-container">
        <h1 class="recipe-title">{recipe.title}</h1>
        <div className="star-icon-container">
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <img src={star} />
          <h5>5 STARS / 75 REVIEWS</h5>
        </div>
        <p class="recipe-headline">
          This delicious recipe is a quick and easy meal that is sure to
          impress. The rich texture and savory taste combine perfectly for a
          delicious and healthy meal.
        </p>
        <a class="jump-to-instructions-link" href="#instructions">
          <div className="jump-to-instructions">
            <i class="bi bi-arrow-down-short"></i>&nbsp;
            <div>Jump to cooking instructions</div>
          </div>
        </a>
        <img src={recipe.image}></img>
        <h1 class="recipe-heading">Health Information</h1>
        <h3 class="health-info">
          Gluten free:{' '}
          <span style={{ color: !recipe.glutenFree ? 'red' : 'green' }}>
            {!recipe.glutenFree ? 'No' : 'Yes'}
          </span>
        </h3>
        <h3 class="health-info">
          Vegan:{' '}
          <span style={{ color: !recipe.vegan ? 'red' : 'green' }}>
            {!recipe.vegan ? 'No' : 'Yes'}
          </span>
        </h3>
        <h3 class="health-info">
          Vegeterian:{' '}
          <span style={{ color: !recipe.vegetarian ? 'red' : 'green' }}>
            {!recipe.vegetarian ? 'No' : 'Yes'}
          </span>
        </h3>
        <h3 class="health-info">
          Dairy-free:{' '}
          <span style={{ color: !recipe.dairyFree ? 'red' : 'green' }}>
            {!recipe.dairyFree ? 'No' : 'Yes'}
          </span>
        </h3>
        <h3 class="health-info">
          Low FODMAP:{' '}
          <span style={{ color: !recipe.lowFodMap ? 'red' : 'green' }}>
            {!recipe.lowFodMap ? 'No' : 'Yes'}
          </span>
        </h3>
        <h3 class="health-info">
          Very healthy:{' '}
          <span style={{ color: !recipe.veryHealthy ? 'red' : 'green' }}>
            {!recipe.veryHealthy ? 'No' : 'Yes'}
          </span>
        </h3>
        <h1 class="recipe-heading">Ingredients</h1>
        {ingredients.map((ingredient, index) => (
          <>
            <ul class="ingredients-list">
              <li key={index}>{ingredient.name}</li>
            </ul>
          </>
        ))}
        <h1 id="instructions" class="recipe-heading">
          Instructions
        </h1>
        {steps.map((step, index) => (
          <>
            <ul className="instructions-list">
              <li key={index}>
                {step.number}.&nbsp;{step.step}
              </li>
            </ul>
          </>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
