import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import Footer from '../Footer/Footer';
import './Recipes.css';
import img1 from '../../Assets/bonbon-girl-cooking-a-salad-but-dreaming-about-meat.png';
import MobileNav from '../MobileNav/MobileNav';
import { useMediaQuery } from 'react-responsive';

const Recipes = ({
  currentRecipes,
  loading,
  paginate,
  postsPerPage,
  totalPosts,
}) => {
  const shouldRecipesHeaderBeColumn = useMediaQuery({
    query: '(max-width: 750px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="recipe-index-page-container">
      {isMobile ? <MobileNav /> : <LogoSocialLinks />}

      <div
        className="recipes-index-page"
        style={{ border: isMobile && 'none' }}
      >
        <div className="your-recipes-headline">
          <div
            className="your-recipes-headline-wrapper"
            style={{ flexDirection: shouldRecipesHeaderBeColumn && 'column' }}
          >
            <div className="recipes-headline-img">
              <img src={img1} />
            </div>
            <div
              className="recipes-headline-text"
              style={{ textAlign: shouldRecipesHeaderBeColumn && 'center' }}
            >
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

        <div className="container">
          <div className="row">
            <div className="card-group">
              {currentRecipes.map((recipe, index) => (
                <div className="col-md-5 col-lg-3 col-sm-12">
                  <div className="card">
                    <Link className="recipe-links" to={`/recipes/${recipe.id}`}>
                      <div key={index} className="card">
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
      <Footer />
    </div>
  );
};

export default Recipes;
