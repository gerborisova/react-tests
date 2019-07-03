import React from "react";
import { mount, shallow } from "enzyme";
import ListContainer from "./ListContainer";
import axios from "axios";

describe("<ListContainer />", () => {
  test("Button 'Refresh' is clicked", () => {
    const spyClick = jest.fn();
    const wrapper = mount(<ListContainer onClick={spyClick} />);

    const buttons = wrapper.find(".button");

    expect(buttons.length).toBe(1);
    buttons.at(0).simulate("click");

    // expect(spyClick).toHaveBeenCalledTimes(1);
    expect(
      wrapper
        .find(".button")
        .at(0)
        .prop("disabled")
    ).toEqual(true);
  });
});



jest.mock("axios");
describe("<ListContainer/>", () => {
  describe("when rendered", () => {
    it("should fetch a list of items", () => {
      const getSpy = jest.spyOn(axios, "get");
      const listContainerInstance = shallow(<ListContainer />);
      expect(getSpy).toBeCalled();
    });
  });
});
