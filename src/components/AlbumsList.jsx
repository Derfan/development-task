import React from "react";
import {ListWrapper, StyledLink} from "../helpers";

export default ({albums}) => (
    <ListWrapper>
        {
            albums.map(album =>
                <StyledLink
                    key={album[0].albumId}
                    to={{pathname: `/${album[0].albumId}`, state: {album}}}
                >
                    <p>Album {album[0].albumId}</p>

                    <img src={album[0].thumbnailUrl} alt={album[0].title}/>
                </StyledLink>
            )
        }
    </ListWrapper>
);
