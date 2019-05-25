import React from "react";

import Nav from "../components/Nav";
import Button from "../components/Button";
import "../styles/main.scss";
import "../styles/landing.scss";
import "../styles/explore.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='hero-transition-images'>
            <img className='hero-mars-surface-1' src='https://66.media.tumblr.com/5257c4bdcf1f7ceda4ff0db15fff9642/tumblr_oe8rh9e8yy1rlz4gso1_1280.jpg' />
            <img className='hero-mars-surface-2' src='https://66.media.tumblr.com/f623ea011cd42968dd8d895c9f57d0a7/tumblr_pca1xfQ3pu1rlz4gso2_1280.jpg' />
            <img className='hero-mars-surface-3' src='https://66.media.tumblr.com/87261cf13f38f71ee8f0db36643c9504/tumblr_p1u8me9t5l1rlz4gso1_1280.jpg' />
          </div>
          {/* <div className='nav-top'>
            <Nav />
          </div> */}
          <div className='row no-gutters'>
            <div className=' landing col-lg-12'>
              <h1>Planum Australe</h1>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-12'>
              <div data-aos='fade-right' data-aos-offset='200' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out' className='phobos'>
                <img className='phobos-moon-img' src='../static/images/Phobos.png' />
              </div>
              <div data-aos='fade-left' data-aos-offset='200' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out' className='deimos'>
                <img className='deimos-moon-img' src='../static/images/Deimos.png' />
              </div>
              <div
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='50'
                data-aos-duration='1000'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='top-center'
                className='explore-mars'
              >
                <img className='mars-globe-img' src='../static/images/mars-globe.jpg' />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
