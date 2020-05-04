import React from 'react';
import SingleProduct from '../ProfileComponents/SingleProduct'

const OrderContainer = (props) => {

  let {products} = props

  let totalSum = products.reduce((acc, product) => {
    return acc + product.price
  }, 0)


  const handleClick = (e) => {
  
    const product_ids = products.map(product => product.id)


    fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "content-type": 'application/json',
        "Authorization": `bearer ${props.token}`
      },
      body: JSON.stringify({
        product_ids: product_ids
      })
    })
      .then(r => r.json())
      .then((newOrder) => {
        props.addNewOrder(newOrder)
      })




  }


  return (
    <div className="order">
      <h2>Your Order</h2>
      <p id="order-list">
        {products.map((product, index) => <SingleProduct key={index} product={product}/>)}
      </p>
      <h3>Total Price: $<span id="total">{totalSum}</span></h3>
      <button onClick={handleClick} className="submit"> Place an Order </button>
    </div>
  )
}
export default OrderContainer;