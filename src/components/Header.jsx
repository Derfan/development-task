import React from "react";
import styled from "styled-components";
import {withRouter} from "react-router-dom";

export const getCounter = (state, count) => {
    if (!state) return `Number of albums: ${count}`;

    const key = Object.keys(state)[0];

    switch (key) {
        case "photo":
            return `Photo ID: ${state[key].id}`;
        case "album":
            return `Number of photos: ${state[key].length}`;
        default:
            return ``
    }
};

export const Header = ({title, albumsCount, location: {state}}) => {
    const countText = getCounter(state, albumsCount);

    return (
        <HeaderBlock>
            <h1>{title}</h1>

            <p>{countText}</p>
        </HeaderBlock>
    );
};

const HeaderBlock = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default withRouter(Header)
