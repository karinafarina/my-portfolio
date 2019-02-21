import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Showcase from './components/Showcase';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Main />

        <Showcase />
        <section class="contact">

        </section>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
