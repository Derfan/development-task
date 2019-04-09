import React from "react";

export default ({location: {state: {photo}}}) => (
    <div>
        <img src={photo.url} alt={photo.title}/>
    </div>
)
