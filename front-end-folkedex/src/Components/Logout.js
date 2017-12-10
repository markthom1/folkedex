import React, { Component } from 'react';
import './Logout.css';

class Logout extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  handleLogout(e) {
    e.preventDefault();
    var options = {
      method: 'GET',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       "Access-Control-Allow-Origin": "*"
      }
    }

    fetch('http://localhost:3000/auth/logout', options)
    .then(response => response.json())
    .then(responseJson => {
        localStorage.removeItem('session')
        this.props.isLoggedIn(false);
        console.log(responseJson);
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
        <span className=""
        onClick={(e)=>this.handleLogout(e)}>Logout</span>
    )
  }
}

export default Logout;
