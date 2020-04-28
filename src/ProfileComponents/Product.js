import React from 'react';

const Product = (props) => {
  let {product} = props
  console.log(props)

  const handleClick = (e) => {
    props.addProductToOrder(product)
  }

  return (


    <div className="product">
      <h3 className="product_title">{product.name} - ${product.price}</h3>
        <img src={product.image} alt={product.name}/>
        <p className="product_description">
          {/* {product.description} */}
        </p>
        <button  className="button" onClick={handleClick}>Add to Order</button>
    </div>
    

  )
}

export default Product;