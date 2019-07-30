import React, { Fragment } from "react";

import "../styles/main.scss";

class LargeDevices extends React.Component {
  render() {
    return (
      <Fragment>
        <div className='deimos row no-gutters'>
          <div className='deimos-image-col col-lg-6'>
            <img
              data-aos='fade-right'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              className='deimos-moon-img'
              src='../static/images/Deimos.png'
            />
          </div>
          <div className='deimos-info-col col-lg-6'>
            <h2 className='deimos-title'>
              <span>Deimos</span>
            </h2>

            <p className='deimos-info'>
              Deimos (systematic designation: Mars II) is the smaller and outermost of the two natural satellites of the planet Mars. Deimos has a mean radius of 6.2 km (3.9 mi)
              and takes 30.3 hours to orbit Mars.
            </p>
          </div>
        </div>
        <div className='phobos row no-gutters'>
          <div className='phobos-info-col col-lg-6'>
            <h2 className='phobos-title'>
              <span>PHOBOS</span>
            </h2>
            <p className='phobos-info'>
              Phobos is a small, irregularly shaped object with a mean radius of 11 km (7 mi) and is seven times as massive as the outer moon, Deimos. Phobos is named after the
              Greek god Phobos, a son of Ares (Mars) and Aphrodite (Venus) and the personification of fear.
            </p>
          </div>
          <div className='phobos-image-col col-lg-6'>
            <img
              data-aos='fade-left'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              data-aos-easing='ease-in-out'
              className='phobos-moon-img'
              src='../static/images/Phobos.png'
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LargeDevices;
