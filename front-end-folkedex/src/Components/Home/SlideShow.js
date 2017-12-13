import React, { Component } from 'react';
import './SlideShow.css';
import Slide from './Slide';

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
      <div className="card">
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <Slide />
          </div>

        </div>
      </div>
    )
  }
}

export default SlideShow;
