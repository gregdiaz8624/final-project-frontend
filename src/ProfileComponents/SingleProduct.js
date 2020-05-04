import React from 'react';

const SingularProduct = (props) => {


  let handleClick = () =>{

    // console.log(handleClick)

  }

  return (
    <li>
      {props.product.name} 
{/* 
      <button onClick={handleClick}>X</button> */}
    </li>
    
  )
}

export default SingularProduct;