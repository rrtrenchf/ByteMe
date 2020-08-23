const router = require("express").Router();
const playlistRoutes = require("./playlistRoute");
// Book routes
router.use("/playlists", playlistRoutes);
module.exports = router;