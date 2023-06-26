import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { db, auth } from '../../config/firebase-config';
import star from '../../Assets/icons8-star-48.png';


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
  const [likedRecipe, setLikedRecipe] = useState('');
  const [isRecipeLiked, setIsRecipeLiked] = useState(true);

  const findRecipe = () => {
    setLikedRecipe(likedRecipes.find((recipe) => recipe.id === recipeId));
  };

  useEffect(() => {
    findRecipe();
  }, [recipeId]);

  const likedRecipesCollectionRef = collection(db, 'userLikedRecipes');

  const toggleLike = async () => {
    if (auth.currentUser === null) {
      alert('please login');
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
    <>
      <div>
        <div className="liked-recipes-breadcrumb">
          <div className="recipe-breadcrumb-content">
            <Link to="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link to="/liked">My recipes</Link>
            <i className="bi bi-chevron-right"></i>
            <span style={{ marginLeft: '0' }}>{likedRecipe?.title}</span>
          </div>
        </div>
        <div className="recipe-container">
          <div className="title-like-heart-container">
            <h1 className="single-recipe-title">{likedRecipe?.title}</h1>
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
          <img src={likedRecipe?.image} alt="recipe"></img>
          <h1 className="recipe-heading">Health Information</h1>
          <h3 className="health-info">
            Gluten free:{' '}
            <span style={{ color: !likedRecipe?.glutenFree ? 'red' : 'green' }}>
              {!likedRecipe?.glutenFree ? 'No' : 'Yes'}
            </span>
          </h3>
          <h3 className="health-info">
            Vegan:{' '}
            <span style={{ color: !likedRecipe?.vegan ? 'red' : 'green' }}>
              {!likedRecipe?.vegan ? 'No' : 'Yes'}
            </span>
          </h3>
          <h3 className="health-info">
            Vegeterian:{' '}
            <span style={{ color: !likedRecipe?.vegetarian ? 'red' : 'green' }}>
              {!likedRecipe?.vegetarian ? 'No' : 'Yes'}
            </span>
          </h3>
          <h3 className="health-info">
            Dairy-free:{' '}
            <span style={{ color: !likedRecipe?.dairyFree ? 'red' : 'green' }}>
              {!likedRecipe?.dairyFree ? 'No' : 'Yes'}
            </span>
          </h3>
          <h3 className="health-info">
            Low FODMAP:{' '}
            <span style={{ color: !likedRecipe?.lowFodMap ? 'red' : 'green' }}>
              {!likedRecipe?.lowFodMap ? 'No' : 'Yes'}
            </span>
          </h3>
          <h3 className="health-info">
            Very healthy:{' '}
            <span
              style={{ color: !likedRecipe?.veryHealthy ? 'red' : 'green' }}
            >
              {!likedRecipe?.veryHealthy ? 'No' : 'Yes'}
            </span>
          </h3>
          <h1 className="recipe-heading">Ingredients</h1>
          {likedRecipe?.ingredients?.map((ingredient, index) => (
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
            {likedRecipe?.steps?.map((step, index) => (
              <li key={index}>
                {step.number}.&nbsp;{step.step}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default LikedRecipe;
