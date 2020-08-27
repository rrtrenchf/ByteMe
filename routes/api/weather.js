const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

// Routes start with /auth
router.route("/")
    .get(weatherController.findAll)
    .post(weatherController.create);

module.exports = router;