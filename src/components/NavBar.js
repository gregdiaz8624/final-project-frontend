import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  return(
    <ul className="nav">
      <li>
        <NavLink to="/"> <img className="card-img-top" src={"https://shop.globalcyclingnetwork.com/static/version1588065103/frontend/Playsports/gcn/en_US/images/logo.svg"} alt={"Home"}/></NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/profile">Profile/Cart</NavLink>
      </li>
      { localStorage.token? 
      <li>
        <NavLink to="/login" onClick={props.handleLogout} >Logout</NavLink>
      </li>
      :
      <li>
      <NavLink to="/login">Login</NavLink>
    </li>
      }   
    </ul>
  )
};

export default NavBar;