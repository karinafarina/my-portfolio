import React, { Component } from 'react';

import me from '../images/me3.png';

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
      <div className="main mb-4">

        <div className="grid-item left">
          "When you change the way you look at things, the things you look at change" Wayne Dyer
        </div>
        <div className="grid-item my-image">
          <img src={me} alt="Myself" className="me"/>
        </div>

        <div className="grid-item right">
          As a Web Developer on the Dom&Tom Team, I contributed to several projects including Marriott, Rise and Dine, Turner, and Crazy Enough to Work.
        </div>
        <div className="grid-item bottom">
          I am a React Developer with experience with HTML5, CSS3, Javascript, React.js, jQuery, SCSS/SASS, Bootstrap 3 & 4, CSS Grid, FlexBox, Git, The Command Line, Docker and much more.
        </div>

      </div>
      );
    }
  }

  export default Main
