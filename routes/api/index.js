const router = require("express").Router();
const playlistRoutes = require("./playlistRoute");
const weatherRoutes = require("./weather")
// Playlists routes
router.use("/playlists", playlistRoutes)
router.use("/weather", weatherRoutes)
module.exports = router;