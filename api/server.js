const express = require("express");
// const partyRouter = require("../party/party-router.js");
const Party = require("../party/party-model.js");

const server = express();

server.use(express.json());
// server.use("/party", partyRouter);

server.get("/supplies", (req, res) => {
    Party.find()
    .then(supplies => {
        res.status(200).json(supplies);
    })
})

server.post("/supplies", (req, res) => {
    Party.add(req.body)
    .then(() => {
        res.status(202).json(req.body)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

server.delete("/supplies/:id", (req, res) => {
    Party.remove(req.params.id)
    .then(item => {
        res.status(202).json(item)
    })
})

module.exports = server;

