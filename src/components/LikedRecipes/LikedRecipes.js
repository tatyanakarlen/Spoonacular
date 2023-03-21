import { useMediaQuery } from 'react-responsive';
import MobileNav from '../MobileNav/MobileNav';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import { Link } from 'react-router-dom';
import './LikedRecipes.css';

const LikedRecipes = ({ likedRecipes }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

  // console.log('length of liked recipes', likedRecipes.length);

  return (
    <div class="likedRecipesContainer">
      {isMobile ? <MobileNav /> : <LogoSocialLinks />}
      <div
        class="inner-liked-recipes-wrapper"
        style={{ marginTop: isMobile ? '1.25rem' : '9rem' }}
      >
        <h1>Welcome, Jane!</h1>
        <h3>Your Liked Recipes</h3>
        <Link to="/liked"></Link>

        {likedRecipes.length === 0 ? (
          <h1>You don't have any likes recipes! </h1>
        ) : (
          <div className="container">
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
      </div>
    </div>
  );
};

export default LikedRecipes;
