import React from 'react';
import SingleProduct from './SingleProduct'


class Order extends React.Component{

  state={
    clicked: false
  }

  handleClick = (e) => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
  
    return (
      <div className="card" >
        <h4 onClick={this.handleClick}>{
        `Order Id :  ${this.props.order.product_orders.map(product_orders => product_orders.id).join("")}`
          }</h4>
        {
          this.state.clicked
            ?
          <ul className="productsList">
            {
              this.props.order.product_orders.map((product_order) => {
                return <SingleProduct
                  key={product_order.id}
                  product={product_order.product}
                />
              })
            }
          </ul>
            :
          null
        }
      </div>
    )
  }
}


export default Order;