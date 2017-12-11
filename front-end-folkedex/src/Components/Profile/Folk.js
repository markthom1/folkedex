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
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    return (
      <div className="folk">
        <img src={pic} alt=""/>
      </div>
    )
  }
}

export default Folk;
