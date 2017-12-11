import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default props => {
  var handleLogout = (e) => {
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
        props.isLoggedIn(false);
        console.log(responseJson);
    })
    .catch(error => {
      console.log('did not handle biness!');
      console.log(error);
    })

  }

  return (
    <nav className="navBar">
      <ul>
        <NavLink exact to="/home"><li><i className="fa fa-home fa-lg" aria-hidden="true"></i> Home</li></NavLink>
        <NavLink to="/profile"><li><i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i> Profile</li></NavLink>
        <NavLink to="/rank"><li><i className="fa fa-trophy fa-lg" aria-hidden="true"></i> Rankings</li></NavLink>
        <NavLink to="/play"><li><i className="fa fa-gamepad fa-lg" aria-hidden="true"></i> Play</li></NavLink>
        <NavLink onClick={(e)=>handleLogout(e)}
        to="#"><li><i className="fa fa-sign-out fa-lg" aria-hidden="true"></i>Logout</li></NavLink>
      </ul>
    </nav>
  )
}
