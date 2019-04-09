import React from "react";
import {shallow} from "enzyme";
import Photo from "../Photo";
import {photo} from "./mock";

const props = {
    location: {state: {photo}}
};

describe("Album", () => {
    const component = shallow(<Photo {...props} />);

    it("render", () => {
        expect(component.find("div")).toHaveLength(1);
        expect(component.find("img")).toHaveLength(1);
    });

    it("correct url", () => {
        expect(component.find("img").prop("src")).toEqual(props.location.state.photo.url);
    })
});
