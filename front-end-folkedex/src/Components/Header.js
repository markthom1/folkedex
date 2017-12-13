import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import search from './Search/searchTerm';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }

    this.goToSearch = this.goToSearch.bind(this)
    this.goToUpload = this.goToUpload.bind(this)
  }

  goToUpload(e) {
    e.preventDefault();
    window.location = 'upload';
  }


  goToSearch(e) {
    e.preventDefault();
    window.location = 'search';
  }


  render () {
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'
    var session = JSON.parse(localStorage.getItem('session'));
    var usersName = `${session.user.first_name} ${session.user.last_name}`;

    return (
      <header className="header-container">
        <NavLink exact to="/home"><h1 className="title-logo">Folkedex</h1></NavLink>
        <div className="header-functions">
          <div className="search-form">
          <i className="fa fa-search fa-lg" aria-hidden="true" onClick={(e)=> this.goToSearch(e)}></i>
          <i className="fa fa-plus-square-o fa-lg" aria-hidden="true" onClick={(e)=> this.goToUpload(e)}></i>
          </div>
          <NavLink exact to={`/profile/${session.user.id}`}><h3>Hello, {usersName}</h3></NavLink>
        </div>
      </header>
    )
  }
}

export default Header;
