import React from 'react';
import './LogoSocialLinks.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const LogoSocialLinks = () => {
  const isMobile = useMediaQuery({
    query: '(min-width: 790px)',
  });
  return (
    <>
      <div className="logo-social-links-container">
        <div className="logo-headline">
          <h1>
            <Link to="/">CookBook</Link>
          </h1>

          {isMobile && <h3>Your source for the best recipes</h3>}
        </div>
        <div className="social-links">
          <ul>
            <li>
              <i className="bi bi-instagram nav-icons"></i>
            </li>
            <li>
              <i className="bi bi-facebook nav-icons"></i>
            </li>
            <li>
              <i className="bi bi-twitter nav-icons"></i>
            </li>
            <li>
              <i className="bi bi-youtube nav-icons"></i>
            </li>
            <li>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/liked">
                <i class="bi bi-heart-fill heart-icon"></i>Liked
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LogoSocialLinks;
