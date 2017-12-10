import React, { Component } from 'react';
import './SlideShow.css';

class SlideShow extends Component {
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
      <div>
        <p>Slides here</p>
      </div>
    )
  }
}

export default SlideShow;
