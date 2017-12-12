import React, { Component } from 'react';
import './Search.css';
import Result from './Result';

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true,
      results: []
    }
  }

  componentWillMount () {
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


  render () {
    console.log(this.state.results);
    const allResult = this.state.results.map(result => {
      return <Result name={`${result.first_name} ${result.last_name}`}
      region={result.region}/>
    })


    return (
      <div className="results-container">
        {allResult}
      </div>
    )
  }
}

export default Search;
