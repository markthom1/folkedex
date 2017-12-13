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

    return (
      <div className="contains-prof-pic">
        <div className="position-relative">
          <img src={this.props.image} alt=""/>
          <h1 className="users-name">{this.props.name}</h1>
        </div>

      </div>
    )
  }
}

export default ProfPic;
