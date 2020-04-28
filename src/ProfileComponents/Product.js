import React from 'react';

const Product = (props) => {
  let {product} = props
  console.log(props)

  const handleClick = (e) => {
    props.addProductToOrder(product)
  }

  return (
<<<<<<< HEAD


    <div className="product">
      <h3 className="product_title">{product.name} - ${product.price}</h3>
        <img src={product.image} alt={product.name}/>
        <p className="product_description">
          {/* {product.description} */}
        </p>
        <button  className="button" onClick={handleClick}>Add to Order</button>
=======
    <div className="col-sm-4 col-lg-3 mb-4">
        <div className="product card">
        <img className="card-img-top" src={product.image} alt={product.name}/>
        <div className="card-body">

            <p className="product_title card-title">{product.name} - ${product.price}</p>
            <p className="product_description">
              {/* {product.description} */}
            </p>
            <button  className="button" onClick={handleClick}>Add to Order</button>
        </div>
        </div>
>>>>>>> 50fb7973b31d0664bd3baaeacede48e2342f392e
    </div>
    


  )
}

export default Product;
