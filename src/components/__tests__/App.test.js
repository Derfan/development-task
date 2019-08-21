import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from "enzyme";
import App from '../App';

const albums = [
    { id: '0' },
    { id: '1' },
    { id: '2' },
];

describe("App", () => {
    const component = shallow(<App/>);

    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("App snapshot", () => {
        expect(component).toMatchSnapshot();
    });

    it("should set albums in to state", () => {
        const instance = component.instance();

        instance.setAlbums(albums);

        expect(component.state().albums).toEqual(albums);
        expect(component.state().isLoading).toBeFalsy();
    });
});
