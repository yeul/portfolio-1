import React from "react";

import Nav from "../components/Nav";
import Button from "../components/Button";
import "../styles/main.scss";
import "../styles/landing.scss";

class App extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='hero-transition-images'>
          <img className='hero-mars-surface-1' src='https://66.media.tumblr.com/5257c4bdcf1f7ceda4ff0db15fff9642/tumblr_oe8rh9e8yy1rlz4gso1_1280.jpg' />
          <img className='hero-mars-surface-2' src='https://66.media.tumblr.com/f623ea011cd42968dd8d895c9f57d0a7/tumblr_pca1xfQ3pu1rlz4gso2_1280.jpg' />
          <img className='hero-mars-surface-3' src='https://66.media.tumblr.com/87261cf13f38f71ee8f0db36643c9504/tumblr_p1u8me9t5l1rlz4gso1_1280.jpg' />
        </div>
        <div className='nav-top'>
          <Nav />
        </div>
        <div className='row no-gutters'>
          <div className=' landing col-lg-12'>
            <h1>Planum Australe</h1>
            {/* <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
          </div>
          {/* <div className='right col-lg-6 col-md-6' /> */}
        </div>
        <div className='row no-gutters'>
          <div className='mars-and-moons-img'>
            <img className='mars-globe-img' src='../static/images/mars-globe.jpg' />
          </div>
          <div className=' landing col-lg-12'>Explore Mars</div>
        </div>
      </div>
    );
  }
}

export default App;
