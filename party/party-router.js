const express = require("express");
const router = express.Router();
const Party = require("./party-model.js");

router.get("/supplies", (req, res) => {
    Party.find()
    .then(supplies => {
        res.status(200).json(supplies);
    })
})

router.post("/supplies", (req, res) => {
    Party.add(req.body)
    .then(() => {
        res.status(200).json(req.body)
    })
    .catch(err => {
        res.status(200).json({error: err.message})
    })
})

// router.delete("/supplies/:id", (req, res) => {
//     Party.remove(req.params.id)
//     .then(item => {
//         res.status(202).json(item)
//     })
// })

module.exports = router;