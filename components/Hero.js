import React, { Fragment } from "react";

const Hero = () => {
  return (
    <Fragment>
      <div className='hero-transition-images'>
        <img className='hero-mars-surface-1' src='../static/images/hero-mars-surface-1.png' />
        <img className='hero-mars-surface-2' src='../static/images/hero-mars-surface-2.png' />
        <img className='hero-mars-surface-3' src='../static/images/hero-mars-surface-3.png' />
      </div>
      <div className='row no-gutters'>
        <div className='landing col-lg-12'>
          <h1>Planum Australe</h1>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
