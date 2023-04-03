import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LikedRecipe = ({ likedRecipes }) => {
  const [likedRecipe, setLikedRecipe] = useState(null);
  const { recipeId } = useParams();

  //   const foundRecipe = likedRecipes.find((recipe) => recipe.id === recipeId);

  useEffect(() => {
    const findLikedRecipe = () => {
      const foundRecipe = likedRecipes.find((recipe) => recipe.id === recipeId);
      setLikedRecipe(foundRecipe);
    };
    findLikedRecipe();
  });

  return <div>This is the liked recipe data!</div>;
};

export default LikedRecipe;
