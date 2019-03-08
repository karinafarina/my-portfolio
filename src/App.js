import React, { Component } from 'react';
import Cloudsmp4 from './images/clouds3.mp4';
import CloudsImage from './images/cloudsimage.png';
import Header from './components/Header';
import Main from './components/Main';
import Showcase from './components/Showcase';
import Footer from './components/Footer';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

      <video className="clouds" id="clouds" loop autoPlay muted poster={CloudsImage}>

        <source src={Cloudsmp4} type='video/mp4'/>

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
