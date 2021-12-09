import React from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div class="not-mobile">
        This demo is only available for mobile devices
      </div>
      <div class="page-body">
            <div class="navigation-wrapper">

                <div class="navigation-toggle">
                


                    <nav class="navigation-panel" id="nav-panel">
                        <ul>
                            <li class="link-item active">
                                <a href="#">Home</a>
                            </li>
                            <li class="link-item">
                                <a href="login.html">Login</a>
                            </li>
                            <li class="link-item">
                                <a href="#">Sign up</a>
                            </li>
                            <li class="link-item">
                                <a href="#">Home</a>
                            </li>
                        </ul>
                    </nav>

                    <a class="hamburger-toggle" href="#nav-panel">
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32.4583 11.0833H5.54165C5.12172 11.0833 4.71899 10.9165 4.42206 10.6196C4.12513 10.3226 3.95831 9.91992 3.95831 9.49999C3.95831 9.08006 4.12513 8.67734 4.42206 8.3804C4.71899 8.08347 5.12172 7.91666 5.54165 7.91666H32.4583C32.8782 7.91666 33.281 8.08347 33.5779 8.3804C33.8748 8.67734 34.0416 9.08006 34.0416 9.49999C34.0416 9.91992 33.8748 10.3226 33.5779 10.6196C33.281 10.9165 32.8782 11.0833 32.4583 11.0833Z" fill="white"/>
                            <path d="M32.4583 20.5833H5.54165C5.12172 20.5833 4.71899 20.4165 4.42206 20.1196C4.12513 19.8226 3.95831 19.4199 3.95831 19C3.95831 18.5801 4.12513 18.1773 4.42206 17.8804C4.71899 17.5835 5.12172 17.4167 5.54165 17.4167H32.4583C32.8782 17.4167 33.281 17.5835 33.5779 17.8804C33.8748 18.1773 34.0416 18.5801 34.0416 19C34.0416 19.4199 33.8748 19.8226 33.5779 20.1196C33.281 20.4165 32.8782 20.5833 32.4583 20.5833Z" fill="white"/>
                            <path d="M32.4583 30.0833H5.54165C5.12172 30.0833 4.71899 29.9165 4.42206 29.6196C4.12513 29.3226 3.95831 28.9199 3.95831 28.5C3.95831 28.0801 4.12513 27.6773 4.42206 27.3804C4.71899 27.0835 5.12172 26.9167 5.54165 26.9167H32.4583C32.8782 26.9167 33.281 27.0835 33.5779 27.3804C33.8748 27.6773 34.0416 28.0801 34.0416 28.5C34.0416 28.9199 33.8748 29.3226 33.5779 29.6196C33.281 29.9165 32.8782 30.0833 32.4583 30.0833Z" fill="white"/>
                            </svg>
                            
                        </a>
                </div>
            </div>

      
            <header class="page-header">

                <h1 class="page-title">The Mind Garden</h1>
    
            </header>
            
            <img class="image-overflow-center" src="images/mind-garden-intro.svg" alt="mind-garden-intro"/>


            <div class="button-group align-bottom fw-m">

                <button class="button-primary">
                    Sign up
                </button>

                <div class="alternative-option">
                    or
                </div>

                <button class="button-alternative">
                    Log in
                </button>
            </div>
      </div>
     
    </div>
  );
}

export default App;
