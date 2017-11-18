import React, { Component } from "react";

import styles from "./HoverButton.css";
const bgColors = {
  default: "#2892d7",
  hover: "#1d70a2"
};

export default class HoverButton extends Component {
  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { children } = this.props;

    return (
      <button
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={{
          backgroundColor: this.state.hover ? bgColors.hover : bgColors.default
        }}
        className={styles.button}
      >
        {children}
      </button>
    );
  }
}
