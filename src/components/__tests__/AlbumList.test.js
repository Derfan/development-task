import React from "react";
import {shallow} from "enzyme";
import AlbumsList from "../AlbumsList";
import {ListWrapper, StyledLink} from "../../helpers";
import {albums} from "./mock";

const props = {
    albums
};

describe("Album", () => {
    const component = shallow(<AlbumsList {...props} />);

    it("Album snapshot", () => {
        expect(component).toMatchSnapshot();
    });

    it("render", () => {
        expect(component.find(ListWrapper)).toHaveLength(1);
        expect(component.find(StyledLink)).toHaveLength(props.albums.length);
    });

    it("correct url", () => {
        expect(component.find(StyledLink).first().prop("to")).toEqual({
            pathname: `/${props.albums[0][0].albumId}`,
            state: {album: props.albums[0]}
        });
    });

    it("correct title", () => {
        expect(component.find(StyledLink).first().find("p").text()).toEqual(`Album ${props.albums[0][0].albumId}`);
    });
});
