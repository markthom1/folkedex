import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }


  render () {
    var pic = 'http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg;'

    return (
      <div className="search-result">
        <img src={pic} alt=""/>
        <div className="result-info">
          <h5>{this.props.name}</h5>
          <h6>Region: {this.props.region}</h6>
          {this.props.isFriend ? "": <div className="btn">Friend Request</div>}
        </div>
      </div>
    )
  }
}

export default Result;
