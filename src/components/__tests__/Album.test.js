import React from "react";
import {shallow} from "enzyme";
import Album from "../Album";
import {ListWrapper, StyledLink} from "../../helpers";
import {album} from "./mock";

const props = {
    location: {state: {album}}
};

describe("Album", () => {
    const component = shallow(<Album {...props} />);

    it("Album snapshot", () => {
        expect(component).toMatchSnapshot();
    });

    it("render", () => {
        expect(component.find(ListWrapper)).toHaveLength(1);
        expect(component.find(StyledLink)).toHaveLength(props.location.state.album.length);
    });

    it("correct url", () => {
        expect(component.find(StyledLink).first().prop("to")).toEqual({
            pathname: `/${props.location.state.album[0].albumId}/${props.location.state.album[0].id}`,
            state: {photo: props.location.state.album[0]}
        });
    });

    it("correct title", () => {
        expect(component.find(StyledLink).first().find("p").text()).toEqual(props.location.state.album[0].title)
    });
});
