import React, { Component } from 'react';
import './Home.css';
import Feed from './Feed';
import SlideShow from './SlideShow';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }

  componentWillMount() {
    localStorage.removeItem('loginPage')
  }



  render () {
    return (
      <div className="container">
        <h1 className="feature-heading">Featured Folk:</h1>
        <div className="slides">
          <SlideShow />
        </div>
        <div className="feed">
          <Feed />
        </div>
      </div>
    )
  }
}

export default Home;
