import React from "react";
import { mount } from "enzyme";

import ResponsiveButton from "../ResponsiveButton";

describe("ResponsiveButton", () => {
  const mockMatchMedia = matches => {
    const matchMedia = jest.fn();
    matchMedia.mockImplementation(() => ({
      matches,
      addListener: () => {},
      removeListener: () => {}
    }));

    global.matchMedia = matchMedia;
  };

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
