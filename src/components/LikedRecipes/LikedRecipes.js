import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase-config';
import './LikedRecipes.css';
import Footer from '../Footer/Footer';
import { db } from '../../config/firebase-config';
import { getDocs, collection, query, where } from 'firebase/firestore';
import Loader from '../Loader/Loader';

const LikedRecipes = ({ likedRecipes, setLikedRecipes }) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });

  console.log('user ID', auth?.currentUser?.uid);

  const [areThereLikedRecipes, setAreThereLikedRecipes] = useState(false);
  const [loading, setLoading] = useState(true);

  //firestore data ref
  const likedRecipesCollectionRef = collection(db, 'userLikedRecipes');

  // const q = query(citiesRef, where("state", "==", "CA"));

  const getLikedRecipes = async () => {
    try {
      const data = query(
        likedRecipesCollectionRef,
        where('likedByUserId', '==', auth?.currentUser?.uid)
      );
      // const data = await getDocs(likedRecipesCollectionRef);
      const likedDocs = await getDocs(data);
      // console.log('data.docs', data.docs)
      // const filteredData = data.docs.map((doc) => ({
      //   ...doc.data(),
      //   // id: doc.id,

      // }));
      const filteredData = likedDocs.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setLikedRecipes(filteredData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getLikedRecipes();
  }, []);

  console.log(likedRecipes);

  useEffect(() => {
    const checkLikedRecipes = () => {
      if (likedRecipes.length > 0) {
        setAreThereLikedRecipes(true);
      }
      console.log('length of liked recipes', likedRecipes.length);
    };
    if (!loading) {
      checkLikedRecipes();
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="likedRecipesContainer">
          <div className="liked-recipes-breadcrumb">
            <div>
              <Link to="/">Home</Link>&nbsp;&nbsp;
              <i className="bi bi-chevron-right"></i>
              <span>My Recipes</span>
            </div>
            <h1>Your Liked Recipes</h1>
          </div>
          <div
            className="inner-liked-recipes-wrapper"
            style={{ marginTop: isMobile && '1.25rem' }}
          >
            {!areThereLikedRecipes ? (
              <div className="no-liked-recipes">
                <h1>You don't have any liked recipes yet! </h1>
                <p>
                  Head home to search for recipes, click on recipes and click
                  the heart to add to your saved!!
                </p>
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg go-home-btn"
                  >
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
                        <Link
                          key={index}
                          className="recipe-links"
                          to={`/liked/${recipe.id}`}
                        >
                          <div className="card">
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
      )}
    </>
  );
};

export default LikedRecipes;
