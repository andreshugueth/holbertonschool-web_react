import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notification";

describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Notifications renders three list items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find("NotificationItem")).toHaveLength(3);
  });
  it("Notifications renders the text Here is the list of notifications", () => {
    const text = "Here is the list of notifications";
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    expect(wrapper.find(".Notifications p").text()).toEqual(text);
  });
});
