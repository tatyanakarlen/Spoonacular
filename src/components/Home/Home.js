import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import './Home.css';
import Carousel from '../../components/Carousel/Carousel';
import chineseNoodles from '../../Assets/chinese-chow-mein-with-chicken-1367x2048.jpg';

const Home = ({ userInput, setUserInput, getRecipes }) => {
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  //     console.log('does scroll work?');
  //   }
  // }, [window]);

  useEffect(() => {
    setUserInput('');
    onClear();
  }, []);

  const ref = useRef(null);
  const onClear = () => {
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
                className="bi bi-search"
              ></i>
            </div>
          </div>
        </div>
        <div className="landing-page-content-inner-wrapper">
          <div className="desktop-landing-page-content-container container">
            <div className="left-side-landing-page">
              <Link to={'/recipes/638714'}>
                <>
                  <img src={chineseNoodles} />
                  <h4 className="image-low-light hero-img-low-light">
                    Chinese home-made dumplings
                    <div className="rating-wrapper">
                      <i className="bi bi-star-fill"></i>

                      <span>4.6</span>
                    </div>
                  </h4>

                  <h5 className="highlight">Asian</h5>
                </>
              </Link>
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
              <h1 className="container-h1 jump-right-into-it-h1">
                Jump right into it!
              </h1>

              <div className="recipe-category-options-container">
                <figure className="recipe-category">
                  <Link onClick={(e) => getRecipes(e, 'vegan')}>
                    <div className="figure-img-container">
                      <img className="landing-page-card-img" src={img} />
                      <h5 className="highlight">Vegan</h5>
                      <h4 className="image-low-light">Get Recipes</h4>
                    </div>
                    <figcaption onClick={(e) => getRecipes(e, 'breakfast')}>
                      Vegan
                      <div className="rating-wrapper">
                        <i className="bi bi-star-fill"></i>

                        <span>4.6</span>
                      </div>
                    </figcaption>
                    <p>Plant-Based Paradise</p>
                  </Link>
                </figure>

                <figure className="recipe-category">
                  <Link onClick={(e) => getRecipes(e, 'meat')}>
                    <div className="figure-img-container">
                      <img className="landing-page-card-img" src={img} />
                      <h5 className="highlight">Meat lovers</h5>
                      <h4 className="image-low-light">Get Recipes</h4>
                    </div>

                    <figcaption onClick={(e) => getRecipes(e, 'lunch')}>
                      Meat lovers
                      <div className="rating-wrapper">
                        <i className="bi bi-star-fill"></i>

                        <span>4.9</span>
                      </div>
                    </figcaption>
                    <p>Unleash Your Inner Carnivore</p>
                  </Link>
                </figure>
                <figure className="recipe-category">
                  <Link onClick={(e) => getRecipes(e, 'gluten free')}>
                    <div className="figure-img-container">
                      <img className="landing-page-card-img" src={img} />
                      <h5 className="highlight">Gluten free</h5>
                      <h4 className="image-low-light">Get Recipes</h4>
                    </div>
                    <figcaption onClick={(e) => getRecipes(e, 'dinner')}>
                      Gluten free
                      <div className="rating-wrapper">
                        <i className="bi bi-star-fill"></i>

                        <span>4.8</span>
                      </div>
                    </figcaption>
                    <p>Flavor Without the Gluten</p>
                  </Link>
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
                Delights!
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
                  <i className="bi bi-twitch"></i>
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
