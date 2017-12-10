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
      <div>
        <SlideShow />
        <Feed />
      </div>
    )
  }
}

export default Home;
