import React, { Component } from 'react';
import './Rank.css';

class Rank extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    return (
      <div>
        <h1>This is Rank</h1>
      </div>
    )
  }
}

export default Rank;
