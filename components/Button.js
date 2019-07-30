import React from "react";

import "../styles/components/button.scss";

class Button extends React.Component {
  render() {
    return (
      <div className='scroll-btn'>
        <div className='btn' type='button'>
          Explore
        </div>
      </div>
    );
  }
}

export default Button;
