import React, { Component } from "react";
import Media from "react-media";

import BgColorShift from "./BgColorShift";

import styles from "./AnimatedButton.css";
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
      <BgColorShift
        timeout={500}
        in={this.state.hover}
        start={bgColors.default}
        end={bgColors.hover}
      >
        {bgColorStyles => (
          <button
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
            style={bgColorStyles}
            className={`${styles.button} ${className}`}
          >
            {children}
          </button>
        )}
      </BgColorShift>
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
