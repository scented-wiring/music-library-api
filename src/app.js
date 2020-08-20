const express = require("express");
const app = express();
app.use(express.json());

const artistControllers = require("./controllers/artists");
const albumControllers = require("./controllers/albums");

app.post("/artists", artistControllers.create);
app.get("/artists", artistControllers.list);
app.get("/artists/:artistId", artistControllers.getArtistById);
app.patch("/artists/:artistId", artistControllers.updatesArtistById);
app.delete("/artists/:artistId", artistControllers.deletesArtist);

app.post("/artists/:artistId/albums", albumControllers.createAlbum);

module.exports = app;
