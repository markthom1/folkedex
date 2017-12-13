import React, { Component } from 'react';
import './Folk.css';

class Folk extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {

    return (
      <div className="folk">
        <img src={this.props.image} alt=""/>
      </div>
    )
  }
}

export default Folk;
