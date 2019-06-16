import React from "react";
import "../styles/scrolltop.scss";

class ScrollTop extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div>
        <button className='scrollTop-btn' type='button' aria-label='Back to Top' onClick={this.scrollToTop}>
          ↥
        </button>
      </div>
    );
  }
}

export default ScrollTop;
