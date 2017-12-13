import React, { Component } from 'react';
import './Friend.css';

class Friend extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    

    return (
      <div className="friend" onClick={(e) => this.props.onClick(e)}>
        <img src={this.props.image} alt=""/>
        <h6>{this.props.name}</h6>
      </div>
    )
  }
}

export default Friend;
