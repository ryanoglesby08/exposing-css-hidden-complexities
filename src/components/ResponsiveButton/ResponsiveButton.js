import React, { Component } from "react";
import Media from "react-media";

import styles from "./ResponsiveButton.css";
const smallViewportMaxWidth = 767;
const bgColors = {
  default: "#2892d7",
  hover: "#1d70a2"
};

class Button extends Component {
  state = {
    hover: false
  };

  toggleHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { className, children } = this.props;

    return (
      <button
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={{
          backgroundColor: this.state.hover ? bgColors.hover : bgColors.default
        }}
        className={`${styles.button} ${className}`}
      >
        {children}
      </button>
    );
  }
}

export default ({ children }) => (
  <Media query={{ maxWidth: smallViewportMaxWidth }}>
    {matches =>
      matches ? (
        <Button className={styles.fullWidth}>{children}</Button>
      ) : (
        <Button className={styles.inline}>{children}</Button>
      )
    }
  </Media>
);
