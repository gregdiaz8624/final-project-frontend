import React from 'react';
import OrderContainer from './OrderContainer'
import CatalogContainer from './CatalogContainer'
import PastOrderContainer from './PastOrderContainer'

import {withRouter} from 'react-router-dom'

class ProductContainer extends React.Component {

  state={
    products: []
  }

  addProductToOrder = (productObj) => {
    const newProducts = [...this.state.products, productObj]
    this.setState({
      products: newProducts
    })
  }

  render(){
    return(
      <div className="container">

        <div className="header">
          <h1 id="heading">Welcome to the GCN store, {this.props.user.username}</h1>
        </div>

        <OrderContainer
          products={this.state.products}
          token={this.props.token}
          addNewOrder={this.props.addNewOrder}
        />

        <CatalogContainer
          products={this.props.products}
          addProductToOrder={this.addProductToOrder}
        />

        <PastOrderContainer
          orders={this.props.user.orders}
        />

      </div>
    )
  }

} 

export default withRouter(ProductContainer);