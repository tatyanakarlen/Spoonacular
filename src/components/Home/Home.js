import React, { useRef, useEffect } from 'react';
import img from '../../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import dumplings from '../../Assets/abhishek-sanwa-limbu-LR559Dcst70-unsplash.jpg';
import './Home.css';
import { useMediaQuery } from 'react-responsive';
import breakfast from '../../Assets/breakfast.png';
import lunch from '../../Assets/lunch.png';
import dinner from '../../Assets/dinner.png';

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
          {/* <img src={img} /> */}
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
            </div>
            <div className="right-side-text">
              <h1>What's for dinner tonight?</h1>
              <p>
                CookBook's got your covered. Welcome to our delectable corner of
                the internet, where culinary magic comes to life! Prepare to
                embark on a mouthwatering journey filled with tantalizing
                flavors and irresistible dishes.
              </p>
              <h3 onClick={(e) => getRecipes(e, '')}>
                <i class="bi bi-arrow-right-square-fill"></i>View all recipes
              </h3>
            </div>
          </div>
          <div className="desktop-landing-page-content-container recipe-option-container">
            <div className="container">
              <h1>Jump right into it!</h1>

              <div className="recipe-category-options-container container">
                <figure class="recipe-category">
                  <div class="figure-img-container">
                    <img class="landing-page-card-img" src={img} />
                    <h4 class="landing-page-card-rating-container">
                      <i class="bi bi-star-fill"></i>

                      <span>4.6</span>
                    </h4>
                  </div>
                  <figcaption onClick={(e) => getRecipes(e, 'breakfast')}>
                    Breakfast
                    <img
                      class="meal-icon"
                      id="breakfast-icon"
                      src={breakfast}
                    />
                  </figcaption>
                  <p> Whip up a breakfast sensation!</p>

                  {/* <h3
                    onClick={(e) => getRecipes(e, 'breakfast')}
                    class="get-recipes-btn"
                  >
                    <i class="bi bi-arrow-right-square-fill"></i>Get recipes
                  </h3> */}
                </figure>
                <figure class="recipe-category">
                  <div class="figure-img-container">
                    <img class="landing-page-card-img" src={img} />
                    <h4 class="landing-page-card-rating-container">
                      <i class="bi bi-star-fill"></i>

                      <span>4.9</span>
                    </h4>
                  </div>
                  <figcaption onClick={(e) => getRecipes(e, 'lunch')}>
                    Lunch
                    <img class="meal-icon" src={lunch} />
                  </figcaption>
                  <p>Let's Lunch like never before!</p>
                  {/* <h3
                    onClick={(e) => getRecipes(e, 'lunch')}
                    class="get-recipes-btn"
                  >
                    <i class="bi bi-arrow-right-square-fill"></i>Get recipes
                  </h3> */}
                </figure>
                <figure class="recipe-category">
                  <div class="figure-img-container">
                    <img class="landing-page-card-img" src={img} />
                    <h4 class="landing-page-card-rating-container">
                      <i class="bi bi-star-fill"></i>

                      <span>4.7</span>
                    </h4>
                  </div>
                  <figcaption onClick={(e) => getRecipes(e, 'dinner')}>
                    Dinner
                    <img class="meal-icon" src={dinner} />
                  </figcaption>
                  <p>Get ready to elevate your evening!</p>
                  {/* <h3
                    onClick={(e) => getRecipes(e, 'dinner')}
                    class="get-recipes-btn"
                  >
                    <i class="bi bi-arrow-right-square-fill"></i>Get recipes
                  </h3> */}
                </figure>
              </div>
            </div>
          </div>
          <div className="container mega-footer">
            <div class="newsletter-CTA">
              <h2>CookBook: Your #1 recipe source</h2>
              <p>
                Our mission is to bring you a diverse collection of
                mouthwatering recipes, carefully curated and tested to ensure
                your cooking success.
              </p>
            </div>

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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
