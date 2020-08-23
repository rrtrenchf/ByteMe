const router = require("express").Router();
const playlistRoutes = require("./playlistRoute");
// Playlists routes
router.use("/playlists", playlistRoutes);
module.exports = router;