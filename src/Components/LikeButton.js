import React, { Component } from "react";
import "../Styles/LikeButton.css";

export class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      liked: false,
    };
  }

  handleButtonClick = () => {
    if (this.state.liked) {
      this.setState({
        count: this.state.count - 1,
        liked: !this.state.liked,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
        liked: !this.state.liked,
      });
    }
  };

  render() {
    var likebuttonstate = this.state.liked
      ? "like-button-active"
      : "like-button";
    return (
      <div className={likebuttonstate} onClick={this.handleButtonClick}>
        <span className="heart"></span>
        <span className="like">Like</span>&nbsp;
        <span className="count">{this.state.count}</span>
      </div>
    );
  }
}
