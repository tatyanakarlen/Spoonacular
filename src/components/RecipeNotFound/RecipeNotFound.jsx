import MobileNav from '../MobileNav/MobileNav';
import LogoSocialLinks from '../DesktopNav/DesktopNav';
import { Link } from 'react-router-dom';
import './RecipeNotFound.css';
import img from '../../Assets/404-error.png';
import { useMediaQuery } from 'react-responsive';


const RecipeNotFound = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 575px)',
  });
  return (
    <>
      <div className="recipe-not-found">
        <div className="recipe-not-found-wrapper">
          <img src={img} />
          <div class="recipe-not-found-h1-go-home-link">
            <h1>Recipe not found</h1>
          </div>

          <p>
            Oops! CookBook couldn't find any recipes for you. Head{' '}
            <Link>home</Link> and try these options:
          </p>
          <div class="ul-container">
            <ul>
              <li>African</li>
              <li>American</li>
              <li>British</li>
              <li>Cajun</li>
              <li>Caribbean</li>
              <li>Chinese</li>
              <li>Eastern European</li>
              <li>French</li>
              <li>German</li>
              <li>Greek</li>
              <li>Indian</li>
              <li>Irish</li>
              <li>Italian</li>
            </ul>
            <ul>
              <li>Japanese</li>
              <li>Jewish</li>
              <li>Korean</li>
              <li>Latin American</li>
              <li>Mediterranean</li>
              <li>Mexican</li>
              <li>Middle Eastern</li>
              <li>Nordic</li>
              <li>Southern</li>
              <li>Spanish</li>
              <li>Thai</li>
              <li>Vietnamese</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipeNotFound;
