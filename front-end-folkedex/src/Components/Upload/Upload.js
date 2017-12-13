import React, { Component } from 'react';
import './Upload.css';


class Upload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasState: true,
      imageUrl: "",
      description: "",
      image: null
    }

    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.handleUrlChange = this.handleUrlChange.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
  }

  handleUrlChange(e) {
   this.setState({imageUrl: e.target.value});
  }

 handleDescriptionChange(e) {
  this.setState({description: e.target.value});
  }

  uploadImage(e) {
    e.preventDefault()
    var token = JSON.parse(localStorage.getItem('session')).token
    var options = {
      method: 'POST',
      headers: {
       Accept: 'application/json',
       'Content-Type': 'application/json',
       "Access-Control-Allow-Origin": "*",
       'Authorization': `Bearer ${token}`
      },
      body: {
        imageUrl: this.state.imageUrl,
        description: this.state.description
      }
    }

    fetch('http://localhost:3000/folks/check', options)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        image: responseJson
      })
    })
    .catch(error => {
      console.log('Error!..: ',error);
    });
  }


  render () {


    return (
      <div className="container upload">
        <h1 className="upload-title">Upload</h1>
        <form action="" className="upload-form" onSubmit={(e)=> {this.uploadImage(e)}}>
        <h5>Image Url:</h5>
          <input type="text" name="imageUrl"
          onChange={(e)=>{this.handleUrlChange(e)}} value={this.state.imageUrl}/>
          <h5>Description:</h5>
          <input type="text" name="description"
          onChange={(e)=>{this.handleDescriptionChange(e)}} value={this.state.description}/>
          <input type="submit"/>
        </form>
        {(this.state.image)? <img src={this.state.image.image} alt=""/> :
        <img className="photo" src={this.state.imageUrl} alt=""/>}
      </div>
    )
  }
}

export default Upload;
