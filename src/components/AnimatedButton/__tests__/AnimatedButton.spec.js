import React from "react";
import { mount, render } from "enzyme";

import mockMatchMedia from "../../../__mocks__/matchMedia";

import AnimatedButton from "../AnimatedButton";

describe("AnimatedButton", () => {
  beforeEach(() => {
    mockMatchMedia();
  });

  it("renders pre color shift", () => {
    const button = render(<AnimatedButton>Press me</AnimatedButton>);

    expect(button).toMatchSnapshot();
  });

  it("renders post color shift", () => {
    const button = mount(<AnimatedButton>Press me</AnimatedButton>);

    button.simulate("mouseEnter");

    expect(button).toMatchSnapshot();
  });
});
