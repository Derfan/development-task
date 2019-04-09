import React from "react";
import {ListWrapper, StyledLink} from "../helpers";

export default ({location: {state: {album}}}) => (
    <ListWrapper>
        {
            album.map(photo =>
                <StyledLink
                    key={photo.id}
                    to={{pathname: `/${photo.albumId}/${photo.id}`, state: {photo}}}
                >
                    <p>{photo.title}</p>

                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                </StyledLink>
            )
        }
    </ListWrapper>
)
