import React, { useRef, useEffect } from 'react';
import img from '../../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import dumplings from '../../Assets/abhishek-sanwa-limbu-LR559Dcst70-unsplash.jpg';
import './Home.css';
import { useMediaQuery } from 'react-responsive';
import breakfast from '../../Assets/breakfast.png';
import lunch from '../../Assets/lunch.png';
import dinner from '../../Assets/dinner.png';
import Carousel from '../../components/Carousel/Carousel';

const Home = ({
  filteredRecipes,
  setFilteredRecipes,
  userInput,
  setUserInput,
  getRecipes,
}) => {
  const isTabletScreen = useMediaQuery({
    query: '(max-width: 941px)',
  });

  const isMobileScreen = useMediaQuery({
    query: '(max-width: 780px)',
  });

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    setUserInput('');
    onClear();
  }, []);

  const ref = useRef(null);
  const onClear = () => {
    console.log('clear works');
    ref.current.value = '';
  };

  return (
    <>
      <div className="desktop-landing-page">
        <div className="desktop-hero">
          <div className="search-any-recipe">
            <h1>Search any recipe</h1>
            <div className="input-container">
              <input
                ref={ref}
                name="cuisine"
                onChange={handleChange}
                value={userInput}
                type="text"
                aria-label="Cuisine"
                aria-describedby="button-addon2"
              />

              <i
                onClick={(e) => {
                  getRecipes(e, userInput);
                }}
                class="bi bi-search"
              ></i>
            </div>
          </div>
        </div>
        <div className="landing-page-content-inner-wrapper">
          <div className="desktop-landing-page-content-container container">
            <div className="left-side-landing-page">
              <img class="img-fluid" src={dumplings} />
              <h4 class="image-low-light">
                Chinese home-made dumplings
                <span>
                  <i class="bi bi-star-fill"></i>
                  4.8
                </span>
              </h4>
              <h5 class="highlight">Asian</h5>
            </div>
            <div className="right-side-text">
              <h1>What's for dinner tonight?</h1>
              <p>
                CookBook's got your covered. Welcome to our delectable corner of
                the internet, where culinary magic comes to life! Prepare to
                embark on a mouthwatering journey filled with tantalizing
                flavors and irresistible dishes.
              </p>
              <h3 onClick={(e) => getRecipes(e, '')}>View all recipes</h3>
            </div>
          </div>
          <div className="desktop-landing-page-content-container recipe-option-container">
            <div className="container">
              <h1 className="container-h1">Jump right into it!</h1>

              <div className="recipe-category-options-container container">
                <figure class="recipe-category">
                  <div class="figure-img-container">
                    <img class="landing-page-card-img" src={img} />
                    <h5 class="highlight">Vegan</h5>
                    <h4 class="image-low-light">Get Recipes</h4>
                  </div>
                  <figcaption onClick={(e) => getRecipes(e, 'breakfast')}>
                    Vegan
                    <div class="rating-wrapper">
                      <i class="bi bi-star-fill"></i>

                      <span>4.6</span>
                    </div>
                  </figcaption>
                  <p> Whip up a breakfast sensation!</p>
                </figure>
                <figure class="recipe-category">
                  <div class="figure-img-container">
                    <img class="landing-page-card-img" src={img} />
                    <h5 class="highlight">Meat lovers</h5>
                    <h4 class="image-low-light">Get Recipes</h4>
                  </div>

                  <figcaption onClick={(e) => getRecipes(e, 'lunch')}>
                    Meat lovers
                    <div class="rating-wrapper">
                      <i class="bi bi-star-fill"></i>

                      <span>4.9</span>
                    </div>
                  </figcaption>
                  <p>Let's Lunch like never before!</p>
                </figure>
                <figure class="recipe-category">
                  <div class="figure-img-container">
                    <img class="landing-page-card-img" src={img} />
                    <h5 class="highlight">Gluten free</h5>
                    <h4 class="image-low-light">Get Recipes</h4>
                  </div>
                  <figcaption onClick={(e) => getRecipes(e, 'dinner')}>
                    Gluten free
                    <div class="rating-wrapper">
                      <i class="bi bi-star-fill"></i>

                      <span>4.8</span>
                    </div>
                  </figcaption>
                  <p>Get ready to elevate your evening!</p>
                </figure>
              </div>
            </div>
          </div>
          <div className="container carousel-container">
            <h1 className="container-h1">Most popular</h1>
            <Carousel />
          </div>
          <div className="mega-footer-wrapper">
            <div className="container mega-footer">
              <h1>CookBook</h1>
              <h4>
                Culinary Companion: Your Ultimate Recipe App for Exquisite
                Delights! Discover a World of Diverse Culinary Delights.
              </h4>
              <ul>
                <li>
                  <i className="bi bi-facebook"></i>
                </li>
                <li>
                  <i className="bi bi-instagram"></i>
                </li>
                <li>
                  <i id="youTube-icon" className="bi bi-youtube"></i>
                </li>
                <li>
                  <i class="bi bi-twitch"></i>
                </li>
              </ul>
              <h3>Subscribe</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
