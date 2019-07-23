import React from "react";

import "../styles/main.scss";

class Nav extends React.Component {
  render() {
    return (
      <div className='NavBar'>
        <ul>
          <li className='nav-links'>
            <span>Lorem</span>
          </li>
          <li className='nav-links'>
            <span>Ipsum</span>
          </li>
          <li className='nav-links'>
            <span>Dolor</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
