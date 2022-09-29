const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);

server.listen(3000, "127.0.0.1", () => {
  console.log("server running");
});

const music = require("./public/js/app.js");

app.use(express.static(path.join(__dirname, "public")));

//--------------Routing-------------------

app.get("/", (req, res, next) => {
  let dir = path.join(__dirname, "/index.html");
  res.sendFile(dir);
});

app.get("/albums", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/albums.html"));
});

app.get("/albums/:index", (req, res, next) => {
    const param = req.params.index;
    // console.log(req.params);
    console.log(music.albums);
    console.log(music.albums[param].songs);
    let album = music.albums[param];
    res.send(`<h1>${album.name}</h1>
    <br>
    <h2> Release year: ${album.release} </h2>
    <p>${album.songs}</p>
    
  `+ `` );

    res.end();
  
    
        ;
});

let loopedSongs = function songLoop(album) {
    album.songs.forEach((song, index) => {
        console.log("object");
        return `<p>${song[index]}</p>`
    });
}