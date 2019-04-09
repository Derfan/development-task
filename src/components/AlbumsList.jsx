import React from "react";
import {Link} from "react-router-dom";

export default ({albums}) => (
    <section>
        {
            albums.map(album =>
                <Link
                    key={album[0].albumId}
                    to={{pathname: `/${album[0].albumId}`, state: {album}}}
                >
                    <p>Album [{album[0].albumId}]</p>

                    <img src={album[0].thumbnailUrl} alt={album[0].title}/>
                </Link>
            )
        }
    </section>
);
