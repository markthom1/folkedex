import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }

  handleLogin(e) {
    e.preventDefault();
    var options = {
      method: 'POST',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
       email: this.refs.email.value,
       password: this.refs.paw.value,
      })
    }

    fetch('http://localhost:3000/auth/login', options)
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.token && responseJson.user) {
        localStorage.setItem('session',JSON.stringify(responseJson))
        this.props.isLoaded(false);
        this.props.isLoggedIn(true);
      } else {
        console.log('Error Occured: ',responseJson);
      }

    })
    .catch(error => {
      console.log('did not handle biness!');
      console.log(error);
    })

  }

  componentDidMount() {

  }

  render () {
    console.log('mount login');
    return (
      <div className="align-center">
        <h1>Login</h1>
          <form action="" className="loginForm">
  					<div className="form-group">
              <label for="email">Email Address</label>
  						<input type="email"
              id="email"
              className="form-control"
              placeholder="email"
              ref="email"/>
            </div>
            <div className="form-group">
              <label for="paw">Password</label>
  						<input type="password"
              id="paw"
              className="form-control"
              placeholder="Password"
              ref="paw"/>
            </div>
            <div className="form-group">
  						<input onClick={(e)=> {this.handleLogin(e)}} type="submit" id="submit" className="form-control" value="Submit"/>
  					</div>
  				</form>
      </div>
    )
  }
}

export default Login;
