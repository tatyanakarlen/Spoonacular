import React from 'react';
import img from '../../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import imgVertical from '../../Assets/lunch.jpg';
import decorativeImg from '../../Assets/Serving-Food-PNG-File.png';
import { BiSearch } from 'react-icons/bi';
// import img from '../../Assets/luisa-brimble-2RrBE90w0T8-unsplash.jpg';

import './MobileLandingPage.css';
import SearchForm from '../SearchForm/SearchForm';
import { useMediaQuery } from 'react-responsive';

const MobileLandingPage = () => {
  const isMobileScreen = useMediaQuery({
    query: '(max-width: 1025px)',
  });

  return (
    <>
      {isMobileScreen ? (
        <div class="mobile-landing-page">
          <div class="hero-container">
            <img src={img} />
            <div class="opening-header">
              <h1>Quick and tasty meal ideas</h1>
              <p>
                Whether you're a seasoned chef or a novice in the kitchen, our
                recipes website is your ultimate companion for all things food
                to satisfy your inner culinary genius.{' '}
              </p>
              <h4>
                View all recipes<i className="bi bi-chevron-right"></i>
              </h4>
            </div>
          </div>
          <div class="mobile-search-form">
            <input></input>
            <button>Search</button>
          </div>
          <div className="recipe-options-container">
            <div className="row">
              <div className="card-group">
                <div className="col-md-5 col-lg-5 col-sm-12">
                  <div className="card home-page-recipe-options-card">
                    <img
                      className="card-img-top"
                      src={img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">Breakfast</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-sm-12">
                  <div className="card home-page-recipe-options-card">
                    <img
                      className="card-img-top"
                      src={img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">Breakfast</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-sm-12">
                  <div className="card home-page-recipe-options-card">
                    <img
                      className="card-img-top"
                      src={img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">Breakfast</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-sm-12">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={img}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">Breakfast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="desktop-landing-page">
          <div className="desktop-hero">
            <img src={img} />
            <div className="search-any-recipe">
              <h1>Search any recipe</h1>
              <div className="input-container">
                <input />
                <i class="bi bi-search"></i>
              </div>
            </div>
          </div>
          <div className="desktop-landing-page-content-container container">
            <div className="left-side-landing-page">
              <img src={img} />
            </div>
            <div className="right-side-text">
              <h1>What's for dinner tonight?</h1>
              <p>
                CookBook's got your covered. Welcome to our delectable corner of
                the internet, where culinary magic comes to life! Prepare to
                embark on a mouthwatering journey filled with tantalizing
                flavors, aromatic spices, and irresistible dishes. 
                
              </p>
              <h3>View all recipes<i className="bi bi-chevron-right"></i></h3>
            </div>
          </div>

          {/* <div className="left-side-content-desktop-landing-page">
      <img src={imgVertical}/>
      <div class="desktop-opening-header">
          <h1>Quick and tasty meal ideas</h1>
          <p>
            Whether you're a seasoned chef or a novice in the kitchen, our
            recipes website is your ultimate companion for all things food to
            satisfy your inner culinary genius.{' '}
          </p>
          <h4>
            View all recipes<i className="bi bi-chevron-right"></i>
          </h4>
        </div>
        </div>
        <div className="right-side-content-desktop-landing-page">
            <div className="see-all-recipes">
          <img class="decorative-food-image" src={decorativeImg}/>
          <h3>See all</h3>
          </div>
          <div className="desktop-recipes-categories">
         
          
             <figure>
                 <img src={img}/>
                 <figcaption>Breakfast</figcaption>
             </figure>
             <figure>
                 <img src={img}/>
                 <figcaption>Breakfast</figcaption>
             </figure>
             <figure>
                 <img src={img}/>
                 <figcaption>Breakfast</figcaption>
             </figure>
             <figure>
                 <img src={img}/>
                 <figcaption>Breakfast</figcaption>
             </figure>
          </div>
        </div> */}
        </div>
      )}
    </>
  );
};

export default MobileLandingPage;
