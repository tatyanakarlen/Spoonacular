import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';

const findRecipe = (id, recipes) => {
  let recipe = recipes.find((recipe) => recipe.id === Number(id));
  return recipe;
};

const Recipe = ({ filteredRecipes }) => {
  const { recipeId } = useParams();
  let recipe = findRecipe(recipeId, filteredRecipes);
  console.log('this is single recipe', recipe)

  return <div>
  <Nav />
  this is single recipe
  <h1>{recipe.id}</h1>
  <h3>{recipe.title}</h3>
  </div>;
};

export default Recipe;


