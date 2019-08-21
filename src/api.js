import { formAlbums, formatQuery } from "./helpers";

const URL = `https://jsonplaceholder.typicode.com/photos`;

export const getAlbumsList = (_start = 0, _limit = 300) =>
    fetch(`${URL}?${formatQuery({ _start, _limit })}`)
        .then(res => res.json())
        .then(formAlbums)
        .catch(e => console.log(`Something was wrong: ${e.message}`));
