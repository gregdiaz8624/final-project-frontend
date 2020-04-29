import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/"> <img className="card-img-top" src={"https://shop.globalcyclingnetwork.com/static/version1588065103/frontend/Playsports/gcn/en_US/images/logo.svg"} alt={"Home"}/></NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile/Cart</NavLink>
      </li>
      {/* <li>
        <NavLink to="/logout">Logout</NavLink>
      </li> */}
    </ul>
  )
};

export default NavBar;