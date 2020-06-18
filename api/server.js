const express = require("express");
const partyRouter = require("../party/party-router.js");

const server = express();

server.use(express.json());
server.use("/party", partyRouter);

module.exports = server;