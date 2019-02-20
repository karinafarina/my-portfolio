import React, { Component } from 'react';
import Header from './components/Header'

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Main />
        <section class="my-work">

        </section>
        <section class="contact">

        </section>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
