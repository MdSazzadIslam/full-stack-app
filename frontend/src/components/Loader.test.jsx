import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";
describe("Loader", () => {
  it("should render Loader", () => {
    const wrapper = shallow(<Loader />);
  });
});
