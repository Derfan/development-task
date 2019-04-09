import React from "react";
import {shallow} from "enzyme";
import {Header} from "../Header";

const defaultProps = {
    title: "Test title",
    albumsCount: 5,
    location: {state: {}}
};

describe("Header", () => {
    const component = shallow(<Header {...defaultProps} />);

    it("render", () => {
        expect(component.find("h1")).toHaveLength(1);
        expect(component.find("p")).toHaveLength(1);
    });
});
