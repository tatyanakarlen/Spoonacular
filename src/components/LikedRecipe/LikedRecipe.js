import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

const LikedRecipe = ({ likedRecipes, setLikedRecipes }) => {
  const { recipeId } = useParams();
  console.log('recipe id', recipeId);
  const [likedRecipe, setLikedRecipe] = useState('');
  const [isRecipeLiked, setIsRecipeLiked] = useState(true);

  const findRecipe = () => {
    // const foundRecipe = likedRecipes.find((recipe) => recipe.id === recipeId);
    setLikedRecipe(likedRecipes.find((recipe) => recipe.id === recipeId));
  };

  useEffect(() => {
    findRecipe();
  }, [recipeId]);

  console.log('liked recipe', likedRecipe);

  const likedRecipesCollectionRef = collection(db, 'userLikedRecipes');

  const toggleLike = async () => {
    if (auth.currentUser === null) {
      console.log('you cannot like');
      return;
    } else if (!isRecipeLiked) {
      const currentRecipe = likedRecipe;
      const likedRecipeFirebase = {
        title: currentRecipe.title,
        introParagaph: currentRecipe.introParagaph,
        spoonacularId: currentRecipe.spoonacularId,
        likedByUserId: auth?.currentUser?.uid,
        ingredients: currentRecipe.ingredients,
        steps: currentRecipe.steps,
        image: currentRecipe.image,
        glutenFree: currentRecipe.glutenFree,
        vegan: currentRecipe.vegan,
        vegetarian: currentRecipe.vegetarian,
        dairyFree: currentRecipe.dairyFree,
        lowFodmap: currentRecipe.lowFodmap,
        veryHealthy: currentRecipe.veryHealthy,
      };

      try {
        await addDoc(likedRecipesCollectionRef, likedRecipeFirebase);
        setLikedRecipes([...likedRecipes, likedRecipeFirebase]);
        setIsRecipeLiked(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      const recipeId = likedRecipe.spoonacularId;
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
      setIsRecipeLiked(false);
      return res;
    }
  };

  return (
    <div class="liked-recipe" style={{ marginTop: '7rem' }}>
      <h1>{likedRecipe?.title}</h1>
      <button
        onClick={toggleLike}
        style={{ backgroundColor: isRecipeLiked ? 'red' : 'grey' }}
      >
        Toggle Like
      </button>
    </div>
  );
};

export default LikedRecipe;
