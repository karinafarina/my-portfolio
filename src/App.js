import React, { Component } from 'react';
import Clouds from './images/clouds2.ogv';
import Cloudsmp4 from './images/clouds.mp4';
import Cloudswebm from './images/clouds.webm';
import CloudsImage from './images/cloudsImage.jpg';
import Header from './components/Header';
import Main from './components/Main';
import Showcase from './components/Showcase';
//import Contact from './components/Contact';
import Footer from './components/Footer';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

      <video className="clouds" id="clouds" loop autoPlay muted poster={CloudsImage}>
        <source src={Clouds} type='video/ogg' />
        <source src={Cloudsmp4} type='video/mp4'/>
        <source src={Cloudswebm} type='video/webm'/>
      </video>
        <Header />

        <Main />

        <Showcase />

        <Footer />
      </div>
    );
  }
}

export default App;
