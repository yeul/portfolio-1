import React from "react";

import "../styles/components/button.scss";

class Button extends React.Component {
  render() {
    return (
      <div className='scroll-btn'>
        <button className='btn' type='button'>
          Explore
        </button>
      </div>
    );
  }
}

export default Button;
