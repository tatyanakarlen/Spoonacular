import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import './Recipes.css';
import RecipeNotFound from '../RecipeNotFound/RecipeNotFound';
import { useMediaQuery } from 'react-responsive';

const Recipes = ({
  currentRecipes,
  loading,
  paginate,
  postsPerPage,
  totalPosts,
  userInput,
}) => {
  const shouldRecipesHeaderBeColumn = useMediaQuery({
    query: '(max-width: 750px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

  const capitalizeFirstLetter = (input) => {
    const capitalizedUserInput = input.charAt(0).toUpperCase() + input.slice(1);
    return capitalizedUserInput;
  };

  let capitalized = capitalizeFirstLetter(userInput);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <>
      {currentRecipes.length === 0 ? (
        <RecipeNotFound />
      ) : (
        <div className="recipe-index-page-container">
          <div className="recipes-index-page">
            <div className="liked-recipes-breadcrumb">
              <div>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <i className="bi bi-chevron-right"></i>
                <span>Recipes</span>
              </div>
              <h1>Your Recipes</h1>
            </div>

            <div className="container">
              <div className="row">
                <div className="card-group">
                  {currentRecipes.map((recipe, index) => (
                    <div
                      className={
                        isMobile
                          ? 'col-md-5 col-lg-3 col-sm-12 card-column'
                          : 'col-md-5 col-lg-3 col-sm-12'
                      }
                    >
                      <Link
                        key={index}
                        className="recipe-links"
                        to={`/recipes/${recipe.id}`}
                      >
                        <div className="card">
                          <img
                            className="card-img-top"
                            src={recipe.image}
                            alt="Card image cap"
                          />

                          <div className="card-body">
                            <p className="card-text recipe-title">
                              {recipe.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pagination-container">
            <Pagination
              postsPerPage={postsPerPage}
              paginate={paginate}
              totalPosts={totalPosts}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Recipes;
