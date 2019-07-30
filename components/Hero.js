import React, { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <div className='hero-container container-fluid'>
        <div className='hero-row row no-gutters'>
          <div className='hero-images-col col-lg-12'>
            <div className='hero-transition-images'>
              <img className='hero-mars-surface-1' src='../static/images/hero-mars-surface-1.png' />
              <img className='hero-mars-surface-2' src='../static/images/hero-mars-surface-2.png' />
              <img className='hero-mars-surface-3' src='../static/images/hero-mars-surface-3.png' />
            </div>
            <div className='hero-title-row row no-gutters'>
              <div className='hero-title-col col-lg-12'>
                <h1 className='hero-title'>Planum Australe</h1>
                <h2 className='hero-subtitle'>A Tribute to Mars</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
