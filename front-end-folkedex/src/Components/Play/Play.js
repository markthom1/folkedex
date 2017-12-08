import React, { Component } from 'react';
import './Play.css';

class Play extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    return (
      <div>
        <h1>This is Play</h1>
      </div>
    )
  }
}

export default Play;
