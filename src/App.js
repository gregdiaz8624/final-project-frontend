import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';


// import Logout from './components/Logout'
import ProfileContainer from './ProfileComponents/ProfileContainer'

import CatalogContainer from './containers/CatalogContainer'
import ProductContainer from './containers/ProductContainer'

import {withRouter, Redirect} from 'react-router-dom'


class App extends React.Component {

  state = {

    user: {
      id: 0,
      username: "",
      orders: []
    },
    token: "",
    products: []
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

  renderProfile = (routerProps) => {

    if (this.state.token) {
      return <ProductContainer
        products={this.state.products}
        user={this.state.user}
        token={this.state.token}
        addNewOrder={this.addNewOrder}

      />
    } else {
      return <Redirect to="/login"/>
    }
  }

  addNewOrder = (newlyCreatedOrder) => {
    let copy = [...this.state.user.orders, newlyCreatedOrder]

    this.setState({
      user: {
        ...this.state.user,
        orders: copy
      }
    })
  }

  render(){
    return (
      <div className="App">

        <NavBar />
        {this.state.token && <button className="logout-button" onClick={this.handleLogout}>Log out</button>}
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" render={ this.renderProfile} />
          {/* <Route path="/logout" render={this.state.token && this.handleLogout} /> */}
          <Route path="/products">
            <ProductContainer
              products={this.state.products}
              user={this.state.user}
              token={this.state.token}
            />
          </Route>

          <Route path="/" exact >
          <CatalogContainer
              products={this.state.products}
              user={this.state.user}
              token={this.state.token}
            />
          </Route >
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
