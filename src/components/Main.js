import React, { Component } from 'react';
import clouds from '../images/clouds.ogv';
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
        <video className="clouds" id="clouds" loop autoPlay muted >
          <source src={clouds} type='video/ogg' />
        </video>
        <div className="grid-item left">
          "When you change the way you look at things, the things you look at change" Wayne Dyer
        </div>
        <div className="grid-item my-image">
          <img src={me} alt="" className="me"/>
        </div>

        <div className="grid-item right">
          This is Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, blanditiis, autem optio eveniet numquam obcaecati voluptatum ab illo, facere, magnam nam excepturi labore. Temporibus itaque aspernatur deleniti maxime voluptate fugiat!
        </div>
        <div className="grid-item bottom">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sed ut facilis enim necessitatibus quas,
        </div>

      </div>
      );
    }
  }

  export default Main
