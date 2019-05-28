import React from "react";

import Nav from "../components/Nav";
import Button from "../components/Button";
import ScrollTop from "../components/ScrollTop";
import "../styles/main.scss";
import "../styles/landing.scss";
import "../styles/explore.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='hero-transition-images'>
            <img className='hero-mars-surface-1' src='../static/images/hero-mars-surface-1.png' />
            <img className='hero-mars-surface-2' src='../static/images/hero-mars-surface-2.png' />
            <img className='hero-mars-surface-3' src='../static/images/hero-mars-surface-3.png' />
          </div>
          {/* <div className='nav-top'>
            <Nav />
          </div> */}
          <div className='row no-gutters'>
            <div className='landing col-lg-12'>
              <h1>Planum Australe</h1>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='col-lg-12'>
              <div className='phobos'>
                <img
                  data-aos='fade-right'
                  data-aos-offset='200'
                  data-aos-delay='50'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  className='phobos-moon-img'
                  src='../static/images/Phobos.png'
                />
              </div>
              <div className='deimos'>
                <h2 className='deimos-title'>
                  <span>Deimos</span>
                </h2>
                <p>
                  Deimos (systematic designation: Mars II)[7] is the smaller and outermost of the two natural satellites of the planet Mars, the other
                  being Phobos. Deimos has a mean radius of 6.2 km (3.9 mi) and takes 30.3 hours to orbit Mars.
                </p>
                <img
                  data-aos='fade-left'
                  data-aos-offset='200'
                  data-aos-delay='50'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  className='deimos-moon-img'
                  src='../static/images/Deimos.png'
                />
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
                {/* <img className='dotted-circle-border' src='../static/images/dotted-circle.svg' /> */}
                <img className='mars-globe-img' src='../static/images/mars-globe.jpg' />
              </div>
            </div>
          </div>
        </div>
        <ScrollTop />
      </React.Fragment>
    );
  }
}

export default App;
