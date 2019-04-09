import {formAlbums} from "./helpers";

const URL = `https://jsonplaceholder.typicode.com/photos`;

export const getAlbumsList = () => fetch(URL)
    .then(res => res.json())
    .then(formAlbums)
    .catch(e => console.log(`Something was wrong: ${e.message}`));
