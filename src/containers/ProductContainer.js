import React from 'react';
// import OrderContainer from './OrderContainer'
// import MenuContainer from './MenuContainer'
// import PastOrdersContainer from './PastOrdersContainer'
import {withRouter} from 'react-router-dom'

class BurgerContainer extends React.Component {

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
          <h1 id="heading">Welcome to Good Burger, {this.props.user.username}</h1>
        </div>
{/* 
        <OrderContainer
          burgers={this.state.burgers}
          token={this.props.token}
        />

        <MenuContainer
          burgers={this.props.burgers}
          addBurgerToOrder={this.addBurgerToOrder}
        />


        <PastOrdersContainer
          orders={this.props.user.orders}
        /> */}
      </div>
    )
  }

}

export default withRouter(BurgerContainer);