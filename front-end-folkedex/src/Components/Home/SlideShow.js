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
  //http://static5.businessinsider.com/image/4f75cdb869bedd2a53000046/the-infamous-alabama-face-guy-wants-to-be-president-of-the-university-of-alabama-now.jpg



  render () {
    return (
      <div className="card">
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="" src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Second slide"/>
              <div className="folk-story">
                <h6>Folk Tale: </h6>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    )
  }
}

export default SlideShow;
