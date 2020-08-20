const { Album } = require("../models");
const { Artist } = require("../models");

exports.createAlbum = (req, res) => {
  const { artistId } = req.params;

  Artist.findByPk(artistId).then((artist) => {
    if (!artist) {
      return res.status(404).json({ error: "The artist could not be found." });
    } else {
      const albumData = {
        name: req.body.name,
        year: req.body.year,
        artistId: artist.id,
      };
      Album.create(albumData).then((album) => {
        return res.status(201).json(album);
      });
    }
  });
};
