import React, { Component } from 'react';
import { ReactComponent as LinkedIn } from '../images/linkedin.svg';
import { ReactComponent as GitHub } from '../images/Github.svg';
import { ReactComponent as Gmail } from '../images/Gmail.svg';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="copyright">
          &copy;&nbsp; Karina Gaulin 2019
        </div>
        <div className="social-media">
          <div className="gmail">
            <a href="mailto:karinagaulin@gmail.com" className="gmail-link"><Gmail /></a>
          </div>
          <div className="linked-in">
            <a href="https://www.linkedin.com/in/karina-gaulin-8bb77257/" className="linked-in-link"><LinkedIn /></a>
          </div>
          <div className="github">
            <a href="https://github.com/karinafarina" className="github-link"><GitHub /></a>
          </div>
        </div>
      </div>
    );
  }

}

export default Footer;
