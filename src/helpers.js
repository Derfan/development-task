export const formAlbums = arr => Object.values(arr
    .slice(0, 300)
    .reduce((prev, {albumId, ...rest}) => {
        if (albumId in prev) {
            prev[albumId] = [...prev[albumId], {albumId, ...rest}];
        } else {
            prev[albumId] = [{albumId, ...rest}];
        }

        return prev
    }, {}));
