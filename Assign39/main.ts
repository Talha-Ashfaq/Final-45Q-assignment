// creating a funcion which includes optional parameters::

import { create } from "domain";

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album : {artist: string, title: string, tracks?: number}={
        artist : artist_name,
        title : album_title,
}
// condition for optional parameters::
    if (tracks !== undefined) {
        album.tracks = tracks
    }

    return album;
}

// calling three functions ith different values in a variable:::
let album1 = make_album("Talha","Album title 1");
let album2 = make_album("Salman","Album title 2");

let album3 = make_album("Shoaib","Album title 3",15)

console.log(album1);
console.log(album2);
console.log(album3);



