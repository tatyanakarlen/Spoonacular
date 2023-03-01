import React from 'react';
import './LogoSocialLinks.css';

const LogoSocialLinks = () => {
  return (
    <>
      <div className="logo-social-links-container">
        <div className="logo-headline">
          <h1>Foodie</h1>
          <h3>Your source for the best recipes</h3>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <i className="bi bi-instagram"></i>
            </li>
            <li>
              <i className="bi bi-facebook"></i>
            </li>
            <li>
              <i className="bi bi-twitter"></i>
            </li>
            <li>
              <i className="bi bi-youtube"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LogoSocialLinks;
