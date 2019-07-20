import React from "react";
import {shallow} from "enzyme";
import {Header, getCounter} from "../Header";

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

    it("should return valid string", () => {
        const statePhoto = {photo: {id: 'test1'}};
        const stateAlbum = {album: [0, 1, 2, 3, 4]};

        expect(getCounter(statePhoto)).toEqual(`Photo ID: ${statePhoto.photo.id}`);
        expect(getCounter(stateAlbum)).toEqual(`Number of photos: ${stateAlbum.album.length}`);
    });
});
