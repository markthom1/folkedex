import React, { Component } from 'react';
import './Feed.css';

class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }

  componentWillMount() {

  }



  render () {
    return (
      <div className="card">
        <h5 className="home-title">The Feed</h5>
        <p>Coming soon ...</p>
      </div>
    )
  }
}

export default Feed;
