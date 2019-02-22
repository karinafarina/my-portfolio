import React, { Component } from 'react';
import clouds from './images/clouds.ogv';
import Header from './components/Header';
import Main from './components/Main';
import Showcase from './components/Showcase';
import Contact from './components/Contact';
import Footer from './components/Footer';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

      <video className="clouds" id="clouds" loop autoPlay muted >
        <source src={clouds} type='video/ogg' />
      </video>
        <Header />

        <Main />

        <Showcase />

        <Contact />

        <Footer />
      </div>
    );
  }
}

export default App;
