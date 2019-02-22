import React, { Component } from 'react';

import me from '../images/me.png';

class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.setPlaySpeed = this.setPlaySpeed.bind(this);
  // },
  //
  // componentDidMount() {
  //   setPlaySpeed(() => {
  //     let vid = document.getElementById("clouds");
  //     vid.playbackRate = .1;
  //   }
  // },


  render() {
    return (
      <div className="main">

        <div className="grid-item left">
          "When you change the way you look at things, the things you look at change" Wayne Dyer
        </div>
        <div className="grid-item my-image">
          <img src={me} alt="" className="me"/>
        </div>

        <div className="grid-item right">
          I am a React Developer with experience with HTML5, CSS3, Javascript, React.js, jQuery, SCSS/SASS, Bootstrap 3 & 4, CSS Grid, FlexBox, Git, The Command Line, Docker and much more.
        </div>
        <div className="grid-item bottom">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sed ut facilis enim necessitatibus quas,
        </div>

      </div>
      );
    }
  }

  export default Main
