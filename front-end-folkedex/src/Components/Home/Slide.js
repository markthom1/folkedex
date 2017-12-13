import React, { Component } from 'react';
import './Slide.css';

class Slide extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true,
      folks: [],
      folk: null,
      index: 0
    }

  }

  componentWillMount() {
    console.log('out statement');
    if (!this.state.folk){
      console.log('in statement');
      var token = JSON.parse(localStorage.getItem('session')).token
        var options = {
          method: 'GET',
          headers: {
           Accept: 'application/json',
             'Content-Type': 'application/json',
             'Authorization': `Bearer ${token}`
           }
          }
        fetch('http://localhost:3000/folks/slides', options)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson);
          this.setState({
            folks: responseJson,
            folk: responseJson[0]
          })
        })
        .catch(error => {
          console.log('Error!..: ',error);
        });
      }
  }







  render () {
    var x = 0;
    var changeIndex = () => {
      x = (x === 7 )?0:x+1

    }

    changeIndex()



    return (
      <div className="carousel-item active">
        <img className="" src={(this.state.folks[0])?this.state.folks[x].image:
        "#"}
        alt="Second slide"/>
        <div className="folk-story">
          <h6>Folk Tale: </h6>
          <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    )
  }
}

export default Slide;
