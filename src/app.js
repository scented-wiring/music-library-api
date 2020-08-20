const express = require("express");
const app = express();
app.use(express.json());

const artistControllers = require("./controllers/artists");
const albumControllers = require("./controllers/albums");
const songControllers = require("./controllers/songs");

app.post("/artists", artistControllers.create);
app.get("/artists", artistControllers.list);
app.get("/artists/:artistId", artistControllers.getArtistById);
app.patch("/artists/:artistId", artistControllers.updatesArtistById);
app.delete("/artists/:artistId", artistControllers.deletesArtist);

app.post("/artists/:artistId/albums", albumControllers.createAlbum);

app.post("/album/:albumId/song", songControllers.createSong);

module.exports = app;
