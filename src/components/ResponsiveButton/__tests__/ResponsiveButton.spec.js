import React from "react";
import { mount } from "enzyme";

import mockMatchMedia from "../../../__mocks__/matchMedia";

import ResponsiveButton from "../ResponsiveButton";

describe("ResponsiveButton", () => {
  it("is full width on small viewports", () => {
    mockMatchMedia(true);

    const button = mount(<ResponsiveButton>Press me</ResponsiveButton>);

    expect(button.find("button")).toHaveClassName("fullWidth");
  });

  it("is inline on larger viewports", () => {
    mockMatchMedia(false);

    const button = mount(<ResponsiveButton>Press me</ResponsiveButton>);

    expect(button.find("button")).toHaveClassName("inline");
  });
});
