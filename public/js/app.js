const albums = [
    //     {
    //     "name": "The Dark Side of the Moon",
    //     "artist": "Pink Floyd",
    //     "release": "1973",
    //     "songs": ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Color You Like", "Brain Damage", "Eclipse"]
    // },
    {
        name: "In the Court of the Crimson King",
        // "artist": "King Crimson",
        release: "1969",
        songs: [
            "21st Century Schizoid Man",
            "I talk to the Wind",
            "Epitaph",
            "Moonchild",
            "The Court of the Crimson King"]
    },
    {
        name: "In the Wake of Poseidon",
        release: "1970",
        songs: [
            "Peace - A Beginning",
            "Pictures of a City",
            "Cadence and Cascade",
            "In the Wake of Poseidon",
            "Peace - A Theme",
            "Cat Food",
            "The Devli's Triangle",
            "Peace - An End"
        ]
    }
];

module.exports.albums = albums;
//-----------------------------------------------------------------------------


function main() {
    let albumList = document.getElementById("albumsList");
    console.log("object");
    albums.forEach((album, index) => {
        console.log(album.name);
        let albumName = album.name;
        albumList.innerHTML += `<li id="${index}"><a href="http://localhost:3000/albums/${index}">${albumName}</a></li>`
    });
};

function albumsMain() {
    albums.forEach((album, index) => {
        let albuminfo = document.getElementById("albumInfo");
        console.log(album.name);
        let albumName = album.name;
        albumInfo.innerHTML += `<li id="${index}"><a href="http://localhost:3000/albums/${index}">${albumName}</a></li>`
    });
};


