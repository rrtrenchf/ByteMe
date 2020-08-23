const router = require("express").Router();
const weatherController = require("../controllers/weatherController");

// Routes start with /auth
router.post("/forecast", weatherController.create);
router.get("/", weatherController.findAll);
module.exports = router;