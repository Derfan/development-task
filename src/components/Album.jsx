import React from "react";
import {Link} from "react-router-dom";

export default ({location: {state: {album}}}) => (
    <div>
        {
            album.map(photo =>
                <Link
                    key={photo.id}
                    to={{pathname: `/${photo.albumId}/${photo.id}`, state: {photo}}}
                >
                    <img src={photo.thumbnailUrl} alt={photo.title}/>

                    <p>{photo.title}</p>
                </Link>
            )
        }
    </div>
)
