import { useMediaQuery } from 'react-responsive';
import MobileNav from '../MobileNav/MobileNav';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import { Link } from 'react-router-dom';
import './LikedRecipes.css';
import Footer from '../Footer/Footer';

const LikedRecipes = ({ likedRecipes }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

  // console.log('length of liked recipes', likedRecipes.length);

  return (
    <div class="likedRecipesContainer">
      {isMobile ? <MobileNav /> : <LogoSocialLinks />}
      <div class="liked-recipes-breadcrumb">
        <Link to="/">HOME</Link>&nbsp;&nbsp;
        <i className="bi bi-chevron-right"></i>
        &nbsp;&nbsp;Your Liked Recipes
      </div>
      <div
        class="inner-liked-recipes-wrapper"
        style={{ marginTop: isMobile && '1.25rem' }}
      >
        {likedRecipes.length === 0 ? (
          <div class="no-liked-recipes">
            <h1>You don't have any liked recipes yet! </h1>
            <p>
              Head home to search for recipes, click on recipes and click the
              heart to add to your saved!!
            </p>
            <Link to="/">
              <button type="button" class="btn btn-primary btn-lg go-home-btn">
                Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="container liked-recipe-container">
            <div className="row">
              <div className="card-group">
                {likedRecipes.map((recipe, index) => (
                  <div
                    className={
                      isMobile
                        ? 'col-md-5 col-lg-3 col-sm-12 card-column'
                        : 'col-md-5 col-lg-3 col-sm-12'
                    }
                  >
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
                ))}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default LikedRecipes;
