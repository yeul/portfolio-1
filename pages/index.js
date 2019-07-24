import React from "react";

import ScrollTop from "../components/ScrollTop";
import Hero from "../components/Hero";
import Card from "../components/Card";
import "../styles/main.scss";
// import "../styles/astronaut.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentlyHovered: "false" };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({ currentlyHovered: "true" });
  }

  hoverOff() {
    this.setState({ currentlyHovered: "false" });
  }

  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
        <Hero />
        <div className='explore-mars-container container-fluid'>
          <div className='row no-gutters'>
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
                  Deimos (systematic designation: Mars II) is the smaller and outermost of the two natural satellites of the planet Mars. Deimos has a mean radius of 6.2 km (3.9
                  mi) and takes 30.3 hours to orbit Mars.
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
            <div className='col-lg-12'>
              <div className='explore-mars'>
                <div className='about-mars-left'>
                  <ul className={this.state.currentlyHovered}>
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
                {/* <img className='dotted-circle-border' src='../static/images/dotted-circle.svg' /> */}
                <div className='mars-globe-container'>
                  <img
                    data-aos='fade-up'
                    data-aos-offset='200'
                    data-aos-delay='50'
                    data-aos-duration='1000'
                    data-aos-easing='ease-in-out'
                    data-aos-mirror='true'
                    data-aos-once='false'
                    data-aos-anchor-placement='top-center'
                    className='mars-globe-img'
                    src='../static/images/mars-globe.jpg'
                    onMouseEnter={this.hoverOn}
                    onMouseLeave={this.hoverOff}
                  />
                  <h2
                    data-aos='fade-up'
                    data-aos-offset='200'
                    data-aos-delay='1000'
                    data-aos-duration='1500'
                    data-aos-easing='ease-in-out'
                    data-aos-mirror='true'
                    data-aos-once='false'
                    // data-aos-anchor-placement='top-center'
                  >
                    <span>Explore Mars</span>
                  </h2>
                </div>
                <div className='about-mars-right'>
                  <ul className={this.state.currentlyHovered}>
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
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-offset='100'
          data-aos-delay='50'
          data-aos-duration='1000'
          data-aos-easing='ease-in-out'
          data-aos-mirror='true'
          data-aos-once='false'
          data-aos-anchor-placement='top-center'
          className='cards container-fluid'
        >
          <div className='row'>
            <div className='col-lg-4'>
              <Card
                imageTitle='A Frosted Surface'
                subTitle='HiRise image capturing the seasonal processes of Mars dunes.'
                wallpaper='../static/images/hero-mars-surface-1.png'
                download='Download'
                cardText='This is the first of a new monitoring series to track seasonal processes. 
                It is also a striking image with late winter angled illumination over dunes covered by carbon dioxide frost mixed with dust. 
                Dark spots may be where sand is exposed from very early defrosting activity.
                The incidence angle is 87 degrees, or just 3 degrees above the horizon.
                Written by: Alfred McEwen (13 May 2019).'
              />
            </div>
            <div className='col-lg-4'>
              <Card
                imageTitle='Twin Craters in Meridiani Planum'
                subTitle='HiRise image capturing the seasonal processes of Mars dunes.'
                wallpaper='../static/images/hero-mars-surface-2.png'
                download='Download'
                cardText='This image shows two small impact craters located in Meridiani Planum...Zooming in, we see small boulders on the floor and walls of the left-side crater, and they even seem to match the rough material in the ejecta on the right. 
                With these clues, we can hypothesize that the crater on the left was here first.
                After some time another asteroid hit, formed the crater on the right, which threw material onto the floor of the left, where it remains to this day.
                Written by: Nicole Bardabelias (14 May 2018).'
              />
            </div>
            <div className='col-lg-4'>
              <Card
                imageTitle='The Fault in Our Mars'
                subTitle='HiRise image of the Northern Meridiani Planum faults that have disrupted layered deposits.'
                wallpaper='../static/images/hero-mars-surface-3.png'
                download='Download'
                cardText='Some of the faults produced a clean break along the layers, displacing and offsetting individual beds (yellow arrow). 
                Interestingly, the layers continue across the fault and appear stretched out (green arrow). These observations suggest that some of the faulting occurred while the layered deposits were still soft and could undergo deformation, whereas other faults formed later when the layers must have been solidified and produced a clean break. 
                Written by: Cathy Weitz (11 December 2017).'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <Card
                imageTitle='The Hills in Ganges Chasma'
                subTitle='HiRise image of a deep canyon at the eastern end of the vast Valles Marineris system on Mars.'
                wallpaper='../static/images/hero-mars-surface-4.png'
                download='Download'
                cardText='Ganges Chasma is in the northeast portion of Valles Marineris, and opens into outflow channels that flowed to the north. 
                Scattered hills on the canyon floor may be remnants of chaos terrain that formed from collapse of the canyon. Some of the bedrock has diverse colors as we see in the enhanced-color cutout. 
                Written by: Alfred McEwen (25 June 2018).'
              />
            </div>
            <div className='col-lg-4'>
              <Card
                imageTitle='Landslides in Cerberus Fossae'
                subTitle='HiRise image of semi-parallel fissures on Mars formed by faults which pulled the crust apart in the Cerberus region.'
                wallpaper='../static/images/hero-mars-surface-5.png'
                download='Download'
                cardText='Cerberus Fossae is a steep-sided set of troughs cutting volcanic plains to the east of Elysium Mons. Steep slopes on Mars have active landslides (also called “mass wasting”), and here we see evidence for two types of activity.
                First, the light bluish boulders on the slope appear to originate at a layer of bedrock (also light blue) near the top of the section. Second, the dark thin lines are recurring slope lineae, probably also due to mass wasting, but composed of finer-grained materials.
                Written by: Alfred McEwen (15 April 2019).'
              />
            </div>
            <div className='col-lg-4'>
              <Card
                imageTitle='A Winter’s View of a Gullied Crater'
                subTitle='HiRise image of a Martian crater with many gullies. Seen here are narrow channels and their downslope sediment deposits.'
                wallpaper='../static/images/hero-mars-surface-6.png'
                download='Download'
                cardText='This is the location with the most impressive known gully activity in the Northern hemisphere. Gullies are active in the winter due to carbon dioxide frost, but northern winters are shorter and warmer than southern winters, so there is less frost and less gully activity. 
                Written by: Alfred McEwen 18 April 2017).'
              />
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='credit-section'>
              <span>Images & Mars Data Provided By:</span>
              <div className='logos'>
                <a href='https://www.nasa.gov/'>
                  <img className='nasa-logo' src='../static/images/NASA_logo.svg' alt='The NASA insignia' />
                </a>
                <a href='https://hirise.lpl.arizona.edu/'>
                  <img className='arizona-logo' src='../static/images/Arizona_logo.svg' alt='The University of Arizona insignia' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='footer-section'>
              <div>
                <a href='mailto:mpscqw@gmail.com' target='_top'>
                  CONTACT
                </a>
                <a href='https://github.com/yeul' target='_blank'>
                  <span className='copyright'>©2019 GITHUB.COM/YEUL</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='container-fluid'>
          <div className='row no-gutters'>
            <img className='astronaut' src='../static/images/astronaut.png' />
          </div> */}
        {/* </div> */}
        <ScrollTop />
      </React.Fragment>
    );
  }
}

export default App;
