import React, { Component } from 'react';
import './Search.css';
import Result from './Result';
import search from './searchTerm';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true,
      results: []
    }

    this.searchUsers = this.searchUsers.bind(this)
  }

  searchUsers(e) {
    e.preventDefault();
    console.log(search.searchTerm);
    var token = JSON.parse(localStorage.getItem('session')).token
    var options = {
      method: 'GET',
      headers: {
       Accept: 'application/json',
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${token}`
       }
      }
    fetch('http://localhost:3000/users/', options)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        results: responseJson.users
      })
    })
    .catch(error => {
      console.log('Error!..: ',error);
    });
  }

  componentWillMount () {

  }


  render () {
    const allResult = this.state.results.map(result => {
      return <Result key={result.user.id} name={`${result.user.first_name} ${result.user.last_name}`}
      region={result.user.region} isFriend={result.isFriend}
      userId={result.user.id} friendRequested={result.friendRequested}
      incomingReq={result.incomingReq} image={result.user.image}/>
    })


    return (
      <div className="container esults-container">
      <form className="search-form" onSubmit={(e)=> this.searchUsers(e)}>
        <input id="search-bar" type="text" placeholder="Search ..."/>
      <button className="btn-search" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
        {allResult}
      </div>
    )
  }
}

export default Search;
