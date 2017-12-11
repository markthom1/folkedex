import React, { Component } from 'react';
import './ProfPic.css';

class ProfPic extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    return (
      <div className="contains-prof-pic">
        <div className="position-relative">
          <img src={pic} alt=""/>
          <h1 className="users-name">{this.props.name}</h1>
        </div>

      </div>
    )
  }
}

export default ProfPic;
