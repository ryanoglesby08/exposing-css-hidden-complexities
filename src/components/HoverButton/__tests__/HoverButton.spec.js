import React from "react";
import { shallow } from "enzyme";

import HoverButton from "../HoverButton";

describe("HoverButton", () => {
  it("changes background color on hover", () => {
    const button = shallow(<HoverButton>Press me</HoverButton>);

    button.simulate("mouseEnter");
    expect(button).toHaveStyle("backgroundColor", "#1d70a2");

    button.simulate("mouseLeave");
    expect(button).toHaveStyle("backgroundColor", "#2892d7");
  });
});
