const { Album } = require("../models");
const { Song } = require("../models");

exports.createSong = (req, res) => {
  const { albumId } = req.params;

  Album.findByPk(albumId).then((album) => {
    if (!album) {
      return res.status(404).json({ error: "The album could not be found." });
    } else {
      const songData = {
        name: req.body.name,
        albumId: album.id,
        artistId: album.artistId,
      };
      Song.create(songData).then((song) => {
        return res.status(201).json(song);
      });
    }
  });
};
