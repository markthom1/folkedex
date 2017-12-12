import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'
    var session = JSON.parse(localStorage.getItem('session'));
    var usersName = `${session.user.first_name} ${session.user.last_name}`;

    return (
      <div className="header-container">
        <NavLink exact to="/home"><h1 className="title-logo">Folkedex</h1></NavLink>
        <div className="header-functions">
          <form action="">
            <input type="text" placeholder="Search ..."/>
            <NavLink exact to="/search"><div className="btn-primary"><i className="fa fa-search" aria-hidden="true"></i></div></NavLink>
          </form>
          <NavLink exact to={`/profile/${session.user.id}`}><h3>Hello, {usersName}</h3></NavLink>
        </div>
      </div>
    )
  }
}

export default Header;
