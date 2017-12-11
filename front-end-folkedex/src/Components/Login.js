import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {

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

    setTimeout(()=> {
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
      });
    }, 1100)


  }

  componentDidMount() {

  }

  render () {
    return (
      <div className="container login">
        <div className="shade-div"> <div className="middle">
          <div className="align-center">
            <h2><i className="fa fa-sign-in" aria-hidden="true"> Login</i></h2>
              <form action="" className="loginForm">
                <div className="form-group">
                  <label for="email"><i className="fa fa-envelope fa-lg" aria-hidden="true"></i></label>
                  <input type="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  ref="email"/>
                </div>
                <div className="form-group">
                  <label for="paw"><i className="fa fa-lock fa-2x" aria-hidden="true"></i></label>
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
        </div> </div>
      </div>
    )
  }
}

export default Login;
