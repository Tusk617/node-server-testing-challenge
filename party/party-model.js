const db = require("../data/connections.js");

module.exports = {
    find
}

function find() {
    return db("supplies");
}