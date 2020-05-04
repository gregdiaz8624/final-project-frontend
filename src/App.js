import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';



import CatalogContainer from './containers/CatalogContainer'
import ProductContainer from './containers/ProductContainer'

import {withRouter, Redirect} from 'react-router-dom'
import ShippingHeader from './components/ShippingHeader';
import ProductNavBar from './components/ProductNavBar';


class App extends React.Component {

  state = {

    user: {
      id: 0,
      username: "",
      orders: [],
      
    },
    token: "",
    products: [],
    cart:[]
  }

  componentDidMount(){

    if (localStorage.token) {

      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)

  }

    fetch("http://localhost:4000/products")
    .then(r=> r.json())
    .then((products) => {
      this.setState({
       products
      })
    })
  }



  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }

  handleLogout = () => {
    this.setState({
      user: {
        id: 0,
        username: "",
        products: []
      },
      token: ""
    })
    localStorage.clear()

  }


  handleResponse = (resp) => {
    if (!resp.message) {
      localStorage.token = resp.token
      this.setState({
        user: resp.user,
        token: resp.token
      }, () => {
        this.props.history.push("/profile")
      })
    }
    else {
      alert(resp.message)
    }
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

  renderProfile = () => {
    if (this.state.token) {
      return <ProductContainer
        products={this.state.products}
        user={this.state.user}
        token={this.state.token}
        addNewOrder={this.addNewOrder}
        addProductToOrder={this.addProductToOrder}
        cart={this.state.cart}
      />
    } else {
      return <Redirect to="/login"/>
    }
  }

  // this might want to go in componentDidMount or have its invocation in componentDidMount to avoid 
  // issues with dtrying to read from state before the initial get fetch comes back with product data


  returnGCNCastelliKit = () => {
    let filteredArray = this.state.products

      let accessoriesArray = filteredArray.filter( productPOJO => {
        return productPOJO.category === 'new gcn castelli kit'
      })
      return accessoriesArray
    }  

  returnIndoorTrainging = () => {
    let filteredArray = this.state.products
  
       let accessoriesArray = filteredArray.filter( productPOJO => {
        return productPOJO.category === 'indoor training'
       })
      return accessoriesArray
    }  

  returnAccessories = () => {
    let filteredArray = this.state.products

      let accessoriesArray = filteredArray.filter( productPOJO => {
        return productPOJO.category === 'accessories'
      })
      return accessoriesArray
    }  
  

  returnCasualClothing = () => {
    let filteredArray = this.state.products

      let accessoriesArray = filteredArray.filter( productPOJO => {
        return productPOJO.category === 'casual clothing'
      })
      return accessoriesArray
    }  
  

  renderProductByCategory = (routerProps) =>{
    if (routerProps.location.pathname === "/gcn-castelli-kit"){
      return <ProductContainer
      products={this.returnGCNCastelliKit()}
      user={this.state.user}
      token={this.state.token}
      addProductToOrder={this.addProductToOrder}
      cart={this.state.cart}
      addNewOrder={this.addNewOrder}
    />
    } else if (routerProps.location.pathname === "/indoor-training") {
      return <ProductContainer
      products={this.returnIndoorTrainging()}
      user={this.state.user}
      token={this.state.token}
      addProductToOrder={this.addProductToOrder}
      cart={this.state.cart}
      addNewOrder={this.addNewOrder}
    />
    } else if (routerProps.location.pathname === "/team-kit") {
      return <ProductContainer
      products={this.returnGCNCastelliKit()}
      user={this.state.user}
      token={this.state.token}
      addProductToOrder={this.addProductToOrder}
      cart={this.state.cart}
      addNewOrder={this.addNewOrder}
    />
    } else if (routerProps.location.pathname === "/casual-clothing") {
      return         <ProductContainer
      products={this.returnCasualClothing()}
      user={this.state.user}
      token={this.state.token}
      addProductToOrder={this.addProductToOrder}
      cart={this.state.cart}
      addNewOrder={this.addNewOrder}
    />
    } else if (routerProps.location.pathname === "/accessories") {
      return         <ProductContainer
      products={this.returnAccessories()}
      user={this.state.user}
      token={this.state.token}
      addProductToOrder={this.addProductToOrder}
      cart={this.state.cart}
      addNewOrder={this.addNewOrder}
    />
    }
  }


  addNewOrder = (newlyCreatedOrder) => {
    if (this.state.cart.length == 0 ){
      alert ("Cart is Empty")
      return 
    }
    let copy = [...this.state.user.orders, newlyCreatedOrder]

    this.setState({
      user: {
        ...this.state.user,
        orders: copy
      },
      cart:[]

    })
  }

  addProductToOrder = (productObj) => {
    const newProducts = [...this.state.cart, productObj]
    this.setState({
      cart: newProducts

    })
  }

  render(){

    return (
      <div className="App">

        <ShippingHeader />
        <NavBar handleLogout={this.handleLogout} />
        <ProductNavBar />
        {/* {this.state.token && <button className="logout-button" onClick={this.handleLogout}>Log out</button>} */}
        <Switch>
        
          <Route path="/login" render={ this.renderForm } />
          {/* <Route path="/logout" render={ this.handleLogout}  onClick={this.handleLogout} /> */}
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile} />
          <Route path="/gcn-castelli-kit" render={this.renderProductByCategory} />
          <Route path="/indoor-training" render={this.renderProductByCategory} />
          <Route path="/team-kit" render={this.renderProductByCategory} />
          <Route path="/casual-clothing" render={this.renderProductByCategory} />
          <Route path="/accessories" render={this.renderProductByCategory} />
          {/* <Route path="/gcn-club" >
          { localStorage.token ?
          <ProductContainer
              products={this.state.products}
              user={this.state.user}
              token={this.state.token}
              addProductToOrder={this.addProductToOrder}
              cart={this.state.cart}
              addNewOrder={this.addNewOrder}
            />
            :
          <CatalogContainer
              products={this.state.products}
              user={this.state.user}
              token={this.state.token}
            />}
          </Route> */}
          <Route path="/" exact >
           { localStorage.token ?
          <ProductContainer
              products={this.state.products}
              user={this.state.user}
              token={this.state.token}
              addProductToOrder={this.addProductToOrder}
              cart={this.state.cart}
              addNewOrder={this.addNewOrder}
            />
            :
          <CatalogContainer
              products={this.state.products}
              user={this.state.user}
              token={this.state.token}
            />}
          </Route >
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
