import React, { Component } from 'react';

class Form extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
    <div className="container">
      <div className="row py-5 justify-content-center">
        <div className="col-sm-8 col-md-6">
          <form className="p-4 border" onSubmit={this.handleSubmit}>
            <h1 className="mb-4">{formName}</h1>
            <div className="form-group text-left">
              <label htmlFor="username">Username</label>
              <input className="form-control" type="text" autoComplete="off" id="username" name="username" value={username} onChange={this.handleChange}/>
            </div>
            <div className="form-group text-left">
              <label htmlFor="password">Password</label>
              <input className="form-control" type="password" autoComplete="off" id="password" name="password" value={password} onChange={this.handleChange}/>
            </div>
            <button className="btn btn-primary btn-block btn-lg mt-4" type="submit" value="Submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    );
  }

}

export default Form;
