import React, { useRef, useEffect } from 'react';
import img from '../../Assets/lily-banse--YHSwy6uqvk-unsplash.jpg';
import dumplings from '../../Assets/abhishek-sanwa-limbu-LR559Dcst70-unsplash.jpg';
import './Home.css';
import { useMediaQuery } from 'react-responsive';


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
    onClear();
  }, []);

  const ref = useRef(null);
  const onClear = () => {
    console.log('clear works')
    ref.current.value = '';
  };

  return (

    <>
    <div className="desktop-landing-page">
          <div className="desktop-hero">
            <img src={img} />
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
                CookBook's got your covered. Welcome to our delectable corner of the internet, where culinary magic comes to life! Prepare to embark on a mouthwatering journey filled with tantalizing flavors and irresistible dishes.
                  {/* { isTabletScreen ? "CookBook's got your covered. Welcome to our delectable corner of the internet, where culinary magic comes to life!" : 
                  "CookBook's got your covered. Welcome to our delectable corner of the internet, where culinary magic comes to life! Prepare to embark on a mouthwatering journey filled with tantalizing flavors and irresistible dishes."
                  } */}
                  {/* {isTabletScreen ?  "CookBook's got your covered. Welcome to our delectable corner
                  of the internet, where culinary magic comes to life!" : 
                  "CookBook's got your covered. Welcome to our delectable corner
                  of the internet, where culinary magic comes to life! Prepare
                  to embark on a mouthwatering journey filled with tantalizing
                  flavors and irresistible dishes." } */}
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
                    <img src={img} />
                    <figcaption onClick={(e) => getRecipes(e, 'breakfast')}>
                      Breakfast
                    </figcaption>
                    <p>
                      {' '}
                      It's time to whip up a breakfast sensation that will
                      awaken your senses, elevate your morning and fuel your
                      day!
                    </p>
                    <h3
                      onClick={(e) => getRecipes(e, 'breakfast')}
                      class="get-recipes-btn"
                    >
                      <i class="bi bi-arrow-right-square-fill"></i>Get recipes
                    </h3>
                  </figure>
                  <figure class="recipe-category">
                    <img src={img} />
                    <figcaption onClick={(e) => getRecipes(e, 'lunch')}>
                      Lunch
                    </figcaption>
                    <p>
                      Let's Lunch like never before! Step into the realm of
                      culinary delight and savor a sensational midday meal.
                    </p>
                    <h3
                      onClick={(e) => getRecipes(e, 'lunch')}
                      class="get-recipes-btn"
                    >
                      <i class="bi bi-arrow-right-square-fill"></i>Get recipes
                    </h3>
                  </figure>
                  <figure class="recipe-category">
                    <img src={img} />
                    <figcaption onClick={(e) => getRecipes(e, 'dinner')}>
                      Dinner
                    </figcaption>
                    <p>
                      Get ready to elevate your evening with our sensational
                      dinners. Unleash your inner chef and let your creativity
                      shine.
                    </p>
                    <h3
                      onClick={(e) => getRecipes(e, 'dinner')}
                      class="get-recipes-btn"
                    >
                      <i class="bi bi-arrow-right-square-fill"></i>Get recipes
                    </h3>
                  </figure>
                </div>
              </div>
            </div>
            <div className="container">
              <h3 class="newsletter-h3">Newsletter</h3>
              <div class="landing-page-mega-footer-content">
                <h2>
                  Let's cook! Sign up to recieve daily recipes in your email.
                </h2>
                <div class="newsletter-input-container">
                  <input placeholder={isTabletScreen ? "Enter your email" : "Enter your email address"}></input>
                  <i class="bi bi-arrow-right-square-fill input-chevron"></i>
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
        </div>
      {/* {isMobileScreen ? (
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
              <h4 onClick={(e) => getRecipes(e, '')}>
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
        
      )} */}
    </>

    // <div className="Home">
    //   <div className="home-page-container">
    //     <div className="container landing-page-content left-side-content">
    //       <h5>Digital Cookbook</h5>
    //       <h1>
    //         Quick And Tasty Meal <span>Ideas</span>
    //       </h1>
    //       <p>
    //         What's for dinner tonight?{' '}
    //         <span className="cookbook-highlight">CookBook</span> has you
    //         covered.
    //       </p>

    //       <SearchForm
    //         getRecipes={getRecipes}
    //         filteredRecipes={filteredRecipes}
    //         setFilteredRecipes={setFilteredRecipes}
    //         userInput={userInput}
    //         setUserInput={setUserInput}
    //       />

    //       <div className="meal-options-container">
    //         <figure
    //           onClick={(e) => getRecipes(e, 'breakfast')}
    //           className="meal-option breakfast-figure"
    //         >
    //           <img className="breakfast-img" src={breakfastImg} />
    //           <figcaption className="caption">Breakfast</figcaption>
    //         </figure>

    //         <figure
    //           onClick={(e) => getRecipes(e, 'lunch')}
    //           className="meal-option lunch-figure"
    //         >
    //           <img className="lunch-img" src={lunchImg} />
    //           <figcaption className="caption">Lunch</figcaption>
    //         </figure>

    //         <figure
    //           onClick={(e) => getRecipes(e, 'dinner')}
    //           className="meal-option dinner-figure"
    //         >
    //           <img className="dinner-img" src={dinnerImg} />
    //           <figcaption className="caption">Dinner</figcaption>
    //         </figure>
    //       </div>
    //     </div>
    //     <div className="landing-page-content right-side-content">
    //       <div className="salad-img-container">
    //         <ul className="social-links">
    //           <li className="social-icon">
    //             <i className="bi bi-facebook"></i>
    //           </li>
    //           <li className="social-icon">
    //             <i className="bi bi-instagram"></i>
    //           </li>
    //           <li className="social-icon">
    //             <i className="bi bi-youtube"></i>
    //           </li>
    //           <li className="social-icon">
    //             <i className="bi bi-twitch"></i>
    //           </li>
    //         </ul>

    //         <img src={salad} />
    //         {!isTablet && (
    //           <div
    //             onClick={(e) => getRecipes(e, '')}
    //             className="view-all-recipes"
    //           >
    //             <h5>View All Recipes</h5>

    //             <img src={salmon} />
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
