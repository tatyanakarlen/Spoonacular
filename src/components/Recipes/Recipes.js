import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './Recipes.css';
import img1 from '../../Assets/bonbon-girl-cooking-a-salad-but-dreaming-about-meat.png';

const Recipes = ({
  currentRecipes,
  loading,
  paginate,
  postsPerPage,
  totalPosts,
}) => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <LogoSocialLinks />
      <div className="recipes-index-page">
        <div className="your-recipes-headline">
          <div className="your-recipes-headline-wrapper">
            <div className="recipes-headline-img">
              <img src={img1} />
            </div>
            <div className="recipes-headline-text">
              <h1>Your recipes</h1>
              <p>
                Discover mouth-watering recipes for every occasion! Whether
                you're planning to meal prep for the week or you're looking for
                an amazing meal, we've gone through our recipes and gathered a
                bunch for your meal!
              </p>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row my-5">
            <div className="card-group">
              {currentRecipes.map((recipe, index) => (
                <div className="col-md-5 col-lg-3 col-sm-12">
                  <div className="card">
                    <Link className="recipe-links" to={`/recipes/${recipe.id}`}>
                      <div key={index} class="card">
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
  );
};

export default Recipes;
