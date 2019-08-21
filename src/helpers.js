import styled, {css} from "styled-components";
import {Link} from "react-router-dom";

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
};

const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

    return acc
}, {});

export const formatQuery = obj => new URLSearchParams(obj).toString();

export const formAlbums = arr => Object.values(arr
    .reduce((prev, {albumId, ...rest}) => {
        if (albumId in prev) {
            prev[albumId] = [...prev[albumId], {albumId, ...rest}];
        } else {
            prev[albumId] = [{albumId, ...rest}];
        }

        return prev
    }, {}));

export const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 16px;
    transition: background .1s ease-in-out;
    &:hover {
      background: #e3e3e3;
    }
`;

export const ListWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    ${StyledLink} {
      width: ${100 / 6}%;
      ${media.desktop`
        width: ${100 / 3}%;
      `}
      ${media.phone`
        width: 100%;
      `}
    }
`;
