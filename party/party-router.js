const express = require("express");
const router = express.Router();
const Party = require("./party-model.js");

router.get("/supplies", (req, res) => {
    Party.find()
    .then(supplies => {
        res.status(200).json(supplies);
    })
})

module.exports = router;