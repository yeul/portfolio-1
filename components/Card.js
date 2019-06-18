import React, { Fragment } from "react";

class Card extends React.Component {
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
    return (
      <Fragment>
        <div className='card'>
          <div className='imageHeader'>
            {this.props.imageTitle}
            <br />
            <p className='subTitle'>{this.props.subTitle}</p>
          </div>
          <div className='card-img'>
            <img src={this.props.wallpaper} />
          </div>
          <div className={`download-btn ${this.state.currentlyHovered}`} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
            <span>{this.props.download}</span>
            <br />
            <a href={this.props.wallpaper} target='_blank'>
              <i className='far fa-arrow-alt-circle-down' />
            </a>
          </div>
          <div className='card-text'>
            <p>{this.props.cardText}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Card;
