import React from "react";
import { number, string } from "prop-types";
import { Transition } from "react-transition-group";

const defaultStyle = (startBgColor, timeout) => ({
  transition: `background-color ${timeout}ms`,
  backgroundColor: startBgColor
});

const transitionStyles = endBgColor => {
  const styles = {
    backgroundColor: endBgColor
  };

  return {
    entering: styles,
    entered: styles
  };
};

const BgColorShift = ({ start, end, children, ...rest }) => (
  <Transition {...rest}>
    {status => {
      const styles = {
        ...defaultStyle(start, rest.timeout),
        ...transitionStyles(end)[status]
      };

      return children(styles);
    }}
  </Transition>
);
BgColorShift.propTypes = {
  timeout: number.isRequired,
  start: string.isRequired,
  end: string.isRequired
};

export default BgColorShift;
