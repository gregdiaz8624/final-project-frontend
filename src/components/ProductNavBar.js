import React from 'react';
import {NavLink} from 'react-router-dom'

const ProductNavBar = () => {
  return(
    <ul className="nav2">
  
      <li>
        <NavLink to="/gcn-castelli-kit">NEW GCN CASTELLI KIT</NavLink>
      </li>
      <li>
        <NavLink to="/indoor-training">INDOOR TRAINING</NavLink>
      </li>
      <li>
        <NavLink to="/team-kit">TEAM KIT</NavLink>
      </li>
      <li>
        <NavLink to="/casual-clothing">CASUAL CLOTHING</NavLink>
      </li>
      <li>
        <NavLink to="/accessories">ACCESSORIES</NavLink>
      </li>
      <li>
        <NavLink to="/gcn-club">GCN CLUB</NavLink>
      </li>
     
    </ul>
  )
};

export default ProductNavBar;