import React from "react";
import { shallow } from "enzyme";
import Products from "./Products";

describe("Test Case For Products", () => {
  it("should render button", () => {
    const wrapper = shallow(<Products />);
    const buttonElement = wrapper.find("#search");
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual("Search");
  });

  it("renders Products component header without crashing", () => {
    const wrapper = shallow(<Products />);
    const header = <h3 className="mb-0">Product Information</h3>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});
