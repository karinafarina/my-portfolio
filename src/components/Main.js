import React, { Component } from 'react';
import clouds from '../images/clouds.ogv';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <video className="clouds" loop autoPlay muted>
          <source src={clouds} type='video/ogg' />
        </video>
        <div className="text-left">
          "When you change the way you look at things, the things you look at change" Wayne Dyer
        </div>
        <div className="my-video">

        </div>

        <div className="text-right">

        </div>
        <div className="text-bottom">

        </div>

      </div>
      );
    }
  }

  export default Main
