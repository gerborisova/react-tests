import React from "react";
import { mount } from "enzyme";
import List from "./List";

describe("<List/>", () => {
  it("doesnt contain items", () => {
    const testItems = [];
    const wrapper = mount(<List items={testItems} />);
    const value = wrapper.find(".not-found");
    expect(value).toExist();
  });
  it("contains items", () => {
    const mockedItems = [
      {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      }
    ];
    const wrapper = mount(<List items={mockedItems} />);
    expect(wrapper.props().items).toEqual(mockedItems);
  });
});
