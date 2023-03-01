import React from 'react';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './Recipes.css';
import img from '../../Assets/anh-nguyen-kcA-c3f_3FE-unsplash.jpg';
import img1 from '../../Assets/pablo-couple-eating-in-restaurant.png'

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
  
  let italian = "italian"

  return (
    <div>
      <LogoSocialLinks />
      <div className="recipes-index-page">
        <div className="your-recipes-headline">
          <div className="your-recipes-headline-wrapper">
          <div className="recipes-headline-img">
          <img src={img1}/>
          </div>
          <div className="recipes-headline-text">
          <h1>Italian recipes for you</h1>
          <p>Whether you're planning to meal prep for the week or you're looking for an amazing sandwich or salad to chomp on at your desk, we've gone through our recipes and gathered a bunch for lunch!</p>
          </div>
          </div>
        </div>
        {/* <Nav /> */}
        <div className="recipe-cards-container">
          {currentRecipes.map((recipe) => (
            <Link 
            className="recipe-links"
            to={`/recipes/${recipe.id}`}>
              <div class="card" style={{ width: '30rem' }}>
                <img className="card-img-top" src={recipe.image} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text recipe-title">{recipe.title}</p>
                </div>
              </div>
             
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
