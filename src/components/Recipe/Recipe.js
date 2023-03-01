import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import axios from 'axios';

// const findRecipe = (id, recipes) => {
//   let recipe = recipes.find((recipe) => recipe.id === Number(id));
//   return recipe;
// };

const Recipe = ({ setLoading }) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  // console.log('this is recipe id', recipeId)
  let idAsNum = Number(recipeId);
  console.log('this is type of idAsNum', typeof idAsNum);

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://api.spoonacular.com/recipes/${idAsNum}/information?apiKey=2bb87e4a65e64507a35d5c178493e70a&includeNutrition=false`
      );
      setRecipe(res.data);
      setSteps(recipe.analyzedInstructions[0].steps);
      setIngredients(recipe.extendedIngredients)
      setLoading(false);
    };
    fetchRecipe();
  }, []);

  console.log(recipe);
  

  return (
    <div>
      <Nav />
      this is single recipe
      <img src={recipe.image}></img>
      <h1>{recipe.id}</h1>
      <h3>{recipe.title}</h3>
      {ingredients.map((ingredient, index) => (
        <>
         
            <h1>{ingredient.aisle}</h1>
          
        </>
      ))}
      {steps.map((step, index) => (
        <>
          <h1>{step.step}</h1>
        </>
      ))}
      <h3>Gluten free: {!recipe.glutenFree ? 'False' : 'True'}</h3>
      <h3>Vegan: {!recipe.vegan ? 'False' : 'True'}</h3>
      <h3>Vegeterian: {!recipe.vegetarian ? 'False' : 'True'}</h3>
    </div>
  );
};

export default Recipe;
