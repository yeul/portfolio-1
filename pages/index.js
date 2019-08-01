import React, { Fragment } from "react";

import ScrollTop from "../components/ScrollTop";
import Hero from "../components/Hero";
import Card from "../components/Card";
import SmallDevices from "../components/SmallDevices";
import LargeDevices from "../components/LargeDevices";
import "../styles/main.scss";
// import "../styles/astronaut.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.windowSize = this.windowSize.bind(this);
  }

  /**
   * @description In the constructor *width* is set to 0 by default. So when the component loads initially,
   * neither SmallDevices or LargeDevices gets returned, instead it falls back to the *else*
   * statement. When *componentDidMount* runs, it sets *this.state.width* to the width of the display.
   * Since *this.state* was changed in *componentDidMount*, the *render* was run again, and
   * therefore *windowSize* is run again. This time with an actual window size in *this.state.width*;
   * and you'll actually get either SmallDevices or LargeDevices based on your browser window width.
   */
  windowSize() {
    if (this.state.width > 320 && this.state.width <= 768) {
      return (
        <Fragment>
          <SmallDevices />
        </Fragment>
      );
    } else if (this.state.width > 768) {
      return (
        <Fragment>
          <LargeDevices />
        </Fragment>
      );
    } else {
      return <div />;
    }
  }

  /**
   * @description componentDidMount only runs *after* the component renders client-side; hence we can actually get a
   * window and therefore a window width and set it to state.
   */
  componentDidMount() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <React.Fragment>
        <Hero />
        <div className='explore-mars-container container-fluid'>
          <div className='row no-gutters'>{this.windowSize()}</div>
        </div>
        <div className='cards container-fluid'>
          <div className='row'>
            <div className='cards-col col-lg-4'>
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
            <div className='cards-col col-lg-4'>
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
            <div className='cards-col col-lg-4'>
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
            <div className='cards-col col-lg-4'>
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
            <div className='cards-col col-lg-4'>
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
            <div className='cards-col col-lg-4'>
              <Card
                imageTitle='A Winter’s View of a Gullied Crater'
                subTitle='HiRise image of a Martian crater with many gullies. Seen here are narrow channels and their downslope sediment deposits.'
                wallpaper='../static/images/hero-mars-surface-6.png'
                download='Download'
                cardText='This is the location with the most impressive known gully activity in the Northern hemisphere. Gullies are active in the winter due to carbon dioxide frost, but northern winters are shorter and warmer than southern winters, so there is less frost and less gully activity. 
                Written by: Alfred McEwen (18 April 2017).'
              />
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row no-gutters'>
            <div className='credit-section'>
              <span>Images & Mars Data Provided By:</span>
              <div className='logos'>
                <a href='https://www.nasa.gov/' target='_blank'>
                  <img className='nasa-logo' src='../static/images/NASA_logo.svg' alt='The NASA insignia' />
                </a>
                <a href='https://hirise.lpl.arizona.edu/' target='_blank'>
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
        <ScrollTop />
      </React.Fragment>
    );
  }
}

export default App;
