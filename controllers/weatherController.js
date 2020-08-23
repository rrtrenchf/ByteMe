const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Weather
          .find(req.query)
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        console.log("create", req.body)
        db.Weather
          .create(req.body)
          .then(dbModel => {
            console.log("DATA:", dbModel)
            res.json(dbModel)
          })
          .catch(err => {
            console.log("ERROR:", err)
            res.status(422).json(err)
          });
        }
}