import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true
    }
  }

  takePhoto() {
    // var imageCapture = new ImageCapture()
    // var canvas = document.querySelector('canvas');
    //
    // imageCapture.takePhoto()
    // .then(function(blob) {
    //   console.log('Took photo:', blob);
    //
    // })
    // .catch(function(error) {
    //   console.log('takePhoto() error: ', error);
    // });
  }

  componentDidMount() {
    var constraints = { audio: false, video: { width: 600, height: 720 } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(mediaStream) {
      var video = document.querySelector('video');
      video.srcObject = mediaStream;

      video.onloadedmetadata = function(e) {
        video.play();
      };
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); });
  }


  render () {
    return (
      <div>
      <video id="video" width="300" height="300"></video>
      <div className="btn btn-success" id="button">Take Picture</div>
      <canvas id="canvas" width="300" height="300"></canvas>
        <p>Some other stuff in ptags here</p>
        <img src="#" className="hidden"/>
        <div className="btn btn-primary">Hello</div>
      </div>
    )
  }
}

export default Login;
