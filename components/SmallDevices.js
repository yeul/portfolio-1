import React, { Fragment } from "react";

import "../styles/main.scss";

class SmallDevices extends React.Component {
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
          <div className='phobos-info-col col-lg-6'>
            <h2 className='phobos-title'>
              <span>PHOBOS</span>
            </h2>
            <p className='phobos-info'>
              Phobos is a small, irregularly shaped object with a mean radius of 11 km (7 mi) and is seven times as massive as the outer moon, Deimos. Phobos is named after the
              Greek god Phobos, a son of Ares (Mars) and Aphrodite (Venus) and the personification of fear.
            </p>
          </div>
        </div>
        <div className='col-lg-12'>
          <div className='explore-mars'>
            <div className='mars-globe-container'>
              <img
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='50'
                data-aos-duration='2000'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
                data-aos-once='false'
                data-aos-anchor-placement='top-center'
                className='mars-globe-img'
                src='../static/images/mars-globe.jpg'
              />
              <h2
                data-aos='fade-up'
                data-aos-offset='200'
                data-aos-delay='1000'
                data-aos-duration='2500'
                data-aos-easing='ease-in-out'
                data-aos-mirror='true'
                data-aos-once='false'
              >
                <span>Explore Mars</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-lg-12'>
            <div className='about-mars-left'>
              <ul className='sm-md-ul-mars-info-1'>
                <li>
                  <strong>Aphelion:</strong> 249,200,000 km (154,800,000 mi; 1.666 AU)
                </li>
                <li>
                  <strong>Perihelion:</strong> 206,700,000 km (128,400,000 mi; 1.382 AU)
                </li>
                <li>
                  <strong>Semi-major axis:</strong> 227,939,200 km (141,634,900 mi; 1.523679 AU)
                </li>
                <li>
                  <strong>Eccentricity:</strong> 0.0934
                </li>
                <li>
                  <strong>Orbital period:</strong> 686.971 d (1.88082 yr; 668.5991 sols)
                </li>
                <li>
                  <strong>Synodic period:</strong> 779.96 d (2.1354 yr)
                </li>
                <li>
                  <strong>Average orbital speed:</strong> 24.007 km/s (86,430 km/h; 53,700 mph){" "}
                </li>
                <li>
                  <strong>Inclination:</strong> 1.850° to ecliptic; 5.65° the Sun's equator; 1.67° to invariable plane{" "}
                </li>
                <li>
                  <strong>Mean surface temp:</strong> 210K (−63 °C; −82 °F)
                </li>
                <li>
                  <strong>Satellites:</strong> 2
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='row no-gutters'>
          <div className='col-lg-12'>
            <div className='about-mars-right'>
              <ul className='sm-md-ul-mars-info-2'>
                <li>
                  <strong>Mean radius:</strong> 3389.5 ± 0.2 km (2106.1 ± 0.1 mi)
                </li>
                <li>
                  <strong>Equatorial radius:</strong> 3396.2 ± 0.1 km (0.533 Earths)
                </li>
                <li>
                  <strong>Polar radius:</strong> 3376.2 ± 0.1 km (0.531 Earths)
                </li>
                <li>
                  <strong>Surface area:</strong> 144798500 km2 (0.284 Earths)
                </li>
                <li>
                  <strong>Volume:</strong> 1.6318×1011 km3 (0.151 Earths)
                </li>
                <li>
                  <strong>Mass: </strong>6.4171×1023 kg (0.107 Earths)
                </li>
                <li>
                  <strong>Surface gravity:</strong> 3.72076 m/s2 (12.2072 ft/s2; 0.3794 g)
                </li>
                <li>
                  <strong>Escape velocity:</strong> 5.027 km/s (18100 km/h; 11250 mph)
                </li>
                <li>
                  <strong>Equatorial rotation velocity:</strong> 241.17 m/s (868.22 km/h; 539.49 mph)
                </li>
                <li>
                  <strong>Axial tilt:</strong> 25.19° to its orbital plane
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SmallDevices;
