import React from 'react'
import './LogoSocialLinks.css'

const LogoSocialLinks = () => {
  return (
      <>
    <div className="logo-social-links-container">
        <div className="logo-headline">
      <h1>Foodie App</h1>
      <h3>Your source for the best recipes</h3>
      </div>
      <div className="social-links">
          <ul>
              <li><i class="bi bi-instagram"></i></li>
              <li><i class="bi bi-facebook"></i></li>
              <li><i class="bi bi-twitter"></i></li>
              <li><i class="bi bi-youtube"></i></li>
              
          </ul>
      </div>
     
    </div>
    {/* <hr/> */}
    </>
  )
}

export default LogoSocialLinks
