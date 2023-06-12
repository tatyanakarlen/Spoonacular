import React from 'react';
import img from '../../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import './MobileLandingPage.css';
import SearchForm from '../SearchForm/SearchForm';

const MobileLandingPage = () => {
  return (
    <div class="mobile-landing-page">
      <div class="hero-container">
        <img src={img} />
        <div class="opening-header">
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
      <div class="mobile-search-form">
        <input></input>
        <button>Search</button>
      </div>
      <div className="recipe-options-container">
        <div className="row">
          <div className="card-group">
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="card home-page-recipe-options-card">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Breakfast</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="card home-page-recipe-options-card">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Breakfast</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="card home-page-recipe-options-card">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Breakfast</p>
                </div>
              </div>
            </div>
            <div className="col-md-5 col-lg-5 col-sm-12">
              <div className="card">
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">Breakfast</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLandingPage;
