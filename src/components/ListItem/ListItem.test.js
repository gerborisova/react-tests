import React from "react";
import { mount, shallow, render } from "enzyme";
import toJson from "enzyme-to-json";
import ListItem from "./ListItem";

describe("<ListItem />", () => {
  describe("snapshots", () => {
    test("should render proper html with default props", () => {
      const wrapper = mount(<ListItem />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
    test("should render proper html", () => {
      const wrapper = mount(<ListItem title="Element 1" url="./" />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
  describe("unit tests", () => {
    let wrapper = null;
    let mockData = null;

    beforeEach(() => {
      mockData = { title: "Item title", image: "--" };
      wrapper = mount(<ListItem {...mockData} />);
    });
    test("should render title", () => {
      //arange
      //act

      //assert
      expect(wrapper.find(".listItem__title").length).toBe(1);
    });

    test("should render image", () => {
      //arange
      //act

      //assert
      expect(wrapper.find(".listItem__image").length).toBe(1);
      expect(wrapper.find(".noImage").length).toBe(0);
    });
  });
});
