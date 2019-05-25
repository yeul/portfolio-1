import React from "react";

import "../styles/button.scss";

class Button extends React.Component {
  render() {
    return (
      <div className='scroll-btn'>
        <button className='explore-btn' type='button'>
          Explore
        </button>
      </div>
    );
  }
}

export default Button;
