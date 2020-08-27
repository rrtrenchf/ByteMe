// const express = require('express')

// const playlistController = require('../controllers/playlistController')

// const router = express.Router()

// router.post('/playlist', playlistController.createPlaylist)
// router.put('/playlist/:id', playlistController.updatePlaylist)
// router.delete('/playlist/:id', playlistController.deletePlaylist)
// router.get('/playlist/:id', playlistController.getPlaylistById)
// router.get('/playlists', playlistController.getPlaylists)

// module.exports = router 

const router = require("express").Router();
const playlistController = require("../../controllers/playlistController");

// Matches with "/api/playlists"
router.route("/")
  .get(playlistController.findAll)
  .post(playlistController.create);

// Matches with "/api/playlists/:id"
router
  .route("/:id")
  .get(playlistController.findById)
  .put(playlistController.update)
  .delete(playlistController.remove);

module.exports = router;
