import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    return (
      <div>
        <h1>This is Home</h1>
      </div>
    )
  }
}

export default Home;