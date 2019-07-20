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
    it("renders without crashing", () => {
        const div = document.createElement('div');

        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("should set albums in to state", () => {
        const wrapper = shallow(<App/>);
        const instance = wrapper.instance();

        instance.setAlbums(albums);

        expect(wrapper.state().albums).toEqual(albums);
        expect(wrapper.state().isLoading).toBeFalsy();
    });
});
