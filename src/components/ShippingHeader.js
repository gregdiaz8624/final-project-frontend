import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav0">

      <li>
        <NavLink to="/delivery-information">Free Delivery When You Spend $125</NavLink>
      </li>
      <li>
        <NavLink to="/delivery-information">Express 3-7 Day Delivery Available</NavLink>
      </li>
      <li>
        <NavLink to="/delivery-information">Easy 30 Day Returns Policy</NavLink>
      </li>
 
    </ul>
  )
};

export default NavBar;