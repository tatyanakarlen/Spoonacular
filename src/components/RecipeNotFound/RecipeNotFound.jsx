import MobileNav from '../MobileNav/MobileNav';
import LogoSocialLinks from '../LogoSocialLinks/LogoSocialLinks';
import './RecipeNotFound.css';

const RecipeNotFound = () => {
  return (
    <>
      <LogoSocialLinks />
      <div className="recipe-not-found">
        <h1>Recipe not found</h1>
        <>
          Unfortunatley CookBook couldn't find any recipes for you. Try these
          options for better luck:
        </>
        <ul>
          <li>Africa</li>
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
          <li>Japanese</li>
          <li>Jewish</li>
          <li>Korean</li>
          <li>Latin American</li>
          <li>Mediterranean</li>
          <li>Mexican</li>
          <li>Middle Eastern</li>
          <li>Nordic</li>
          <li>Souther</li>
          <li>Spanish</li>
          <li>Thai</li>
          <li>Vietnamese</li>
        </ul>
      </div>
    </>
  );
};

export default RecipeNotFound;
