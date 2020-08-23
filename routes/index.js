const router = require("express").Router();
const authRoutes = require("./auth");
const path = require("path");
const apiRoutes = require("./api");
const weatherRoutes = require("./weather")

// Routes for authentication
router.use("/auth", authRoutes);
router.use("/api", apiRoutes);
router.use("/weather", weatherRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {res.sendFile(path.join(__dirname, "../client/build/index.html"));});
module.exports = router;