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
import { db, auth } from '../../config/firebase-config';
import {
  getDb,
  getDocs,
  getDoc,
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
  getLikedRecipes,
  testLikedRecipesState,
  setTestLikedRecipesState,
}) => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  let idAsNum = Number(recipeId);
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });
  //firestore data ref
  const likedRecipesCollectionRef = collection(db, 'userLikedRecipes');

  // data model for liked recipes
  // recipe.id
  // recipe.title
  // recipe.image
  // introParagraph
  // recipe.glutenFree
  // recipe.dairyFree
  // recipe.lowFodmap
  // recipe.vegetarian
  // recipe.vegan
  // recipe.veryHealthy
  // recipe.ingredients (array)
  // recipe.steps (array)
  // likedByUserId

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

  // var jobskill_query = db.collection('job_skills').where('job_id','==',post.job_id);
  // jobskill_query.get().then(function(querySnapshot) {
  //   querySnapshot.forEach(function(doc) {
  //     doc.ref.delete();
  //   });
  // });

  // const data = await getDocs(likedRecipesCollectionRef);

  const deleteRecipeFromLiked = async () => {
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
    console.log('this is the response', res);
    const recipeToDeleteDoc = doc(db, 'userLikedRecipes', res[0].id);
    await deleteDoc(recipeToDeleteDoc);
    setTestLikedRecipesState(
      testLikedRecipesState.filter(
        (recipe) => recipe.spoonacularId !== res[0].spoonacularId
      )
    );
    return res;
  };

  // const deleteMovie = async (id, userId) => {
  //   if (auth.currentUser.uid != userId) {
  //     console.log('you cannot delete this');
  //     return;
  //   } else {
  //     const movieDoc = doc(db, 'movies', id);
  //     await deleteDoc(movieDoc);
  //     setMovieList(movieList.filter((movie) => movie.id !== id));
  //   }
  // };

  const addToLikes = async () => {
    if (auth.currentUser === null) {
      console.log('you cannot like');
      return;
    } else {
      const currentRecipe = recipe;
      const likedRecipe = {
        title: currentRecipe.title,
        introParagaph: 'delicious recipe for you!',
        spoonacularId: currentRecipe.id,
        likedByUserId: auth?.currentUser?.uid,
        image: currentRecipe.image,
      };
      try {
        console.log('this is the recipe', currentRecipe);
        await addDoc(likedRecipesCollectionRef, likedRecipe);
        setTestLikedRecipesState([...testLikedRecipesState, likedRecipe]);
        console.log('test likedRecipes', testLikedRecipesState);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    // test input for adding
    // input onChange={(e) => toggleLike()}
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
              <button onClick={addToLikes}>Add To Likes Firebase!</button>
              <button onClick={deleteRecipeFromLiked}>
                Remove from Likes Firebase!
              </button>
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

            {/* <div className="subCategories">
        {nav.map((item) => (
          <div className="subCategory">
            <img src={item.img} />
            {item.subCatergories.map((subCategory) => (
              <>
                <h3>{subCategory.title}</h3>
                {subCategory.links.map((link) => (
                  <a href={link.url}>{link.name}</a>
                ))}
              </>
            ))}
          </div>
        ))}
      </div>
    </div> */}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Recipe;
