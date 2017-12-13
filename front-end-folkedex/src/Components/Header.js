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
  }

  goToSearch(e) {
    e.preventDefault();
    let promiseHere = new Promise((resolve, reject) => {
      search.searchTerm = document.getElementById("search-bar").value;
      resolve('done')
    })

    window.location = 'search';
    
  }


  render () {
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'
    var session = JSON.parse(localStorage.getItem('session'));
    var usersName = `${session.user.first_name} ${session.user.last_name}`;

    return (
      <div className="header-container">
        <NavLink exact to="/home"><h1 className="title-logo">Folkedex</h1></NavLink>
        <div className="header-functions">
          <form className="search-form" onSubmit={(e)=> this.goToSearch(e)}>
            <input id="search-bar" type="text" placeholder="Search ..."/>
          <button className="btn-search" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
          </form>
          <NavLink exact to={`/profile/${session.user.id}`}><h3>Hello, {usersName}</h3></NavLink>
        </div>
      </div>
    )
  }
}

export default Header;
