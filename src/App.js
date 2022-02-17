import React, { Component } from 'react';
import logo from './logo.svg';

import PageHeader from './components/page-header';
import { useNavigate } from 'react-router-dom';
import './App.css';
import PageHero from './components/page-hero';


class AudioRecord extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recording:false
    }
  }

  async componentDidMount() {

    const stream = await navigator.mediaDevices.getUserMedia({audio:true});

    this.mediaRecording = new MediaRecorder(stream);

    this.chunks = [];

    this.mediaRecording.ondataavailable = e => {
      if(e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    } 
  }

  startRecording() {

    this.chunks = [];

    this.mediaRecording.start(10);
    this.setState({recording:true});
  }

  stopRecording() {
    this.mediaRecording.stop();
    this.setState({recording:false});
    const blob = new Blob(this.chunks);
    const URL = window.URL.createObjectURL(blob);
    console.log(URL);
  }

  render() {

    const { recording } = this.state;
    
    return (
      <div className='recording-container'>
        <button onClick={() => this.startRecording()}>Start recoring</button>
        <button onClick={() => this.stopRecording()}>Stop recording</button>
      </div>
      
    )
  }
}

const Navigation = () => {

  return (
    <nav class="navbar sticky-top navbar-expand-md navbar-light">
      <div class="container-fluid">

        <a class="navbar-brand mx-3" href="/">
          <img src="/static/logo.jpg" alt="" width="120" height="80"/>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <ul class="navbar-nav me-auto mb-4 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link navbar-font-size text-dark mx-3" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-font-size text-dark mx-3" href="/about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link navbar-font-size text-dark mx-3" href="/support">Support</a>
            </li>    
          </ul>
          
          <ul class="navbar-nav ms-auto  mx-4 mb-lg-0">
            <li>
              <a class="nav-link navbar-font-size text-dark mx-3" href="/createaccount">Create Account <span class="sr-only"></span></a>
            </li>
            <li>
              <a class="nav-link navbar-font-size text-dark mx-3" href="/login">Login</a>
            </li>
          </ul>  
           
        </div>
      </div>
    </nav>
  )
}


function App() {


  return (
    <div className="App">
   
         <PageHeader />
         

      </div>
  );
}

export default App;
