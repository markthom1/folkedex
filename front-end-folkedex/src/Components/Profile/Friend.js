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
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    return (
      <div className="friend" onClick={(e) => this.props.onClick(e)}>
        <img src={pic} alt=""/>
        <h6>{this.props.name}</h6>
      </div>
    )
  }
}

export default Friend;
