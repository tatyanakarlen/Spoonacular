import { Link, NavLink, useNavigate, withRouter } from 'react-router-dom';

import React from 'react'

const Nav = () => {
  return (
    <div>
      <ul>
          <li>
          <NavLink to="/">
                Go Home
              </NavLink>
          </li>
      </ul>
    </div>
  )
}

export default Nav
