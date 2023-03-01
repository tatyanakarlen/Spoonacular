import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './Recipes.css';
import img from '../../Assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg';

const Recipes = ({
  currentRecipes,
  loading,
  paginate,
  postsPerPage,
  totalPosts,
  filteredRecipes,
}) => {
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <LogoSocialLinks />
      <div className="recipes-index-page">
        {/* <Nav /> */}
        <div className="recipe-cards-container">
          {currentRecipes.map((recipe) => (
            <Link 
            className="recipe-links"
            to={`/recipes/${recipe.id}`}>
              <div class="card" style={{ width: '30rem' }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text recipe-title">{recipe.title}</p>
                </div>
              </div>
              {/* <li key={recipe.id}>
              {recipe.title}
            </li> */}
            </Link>
          ))}
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
