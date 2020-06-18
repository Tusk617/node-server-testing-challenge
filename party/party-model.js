const db = require("../data/connections.js");

module.exports = {
    find,
    add
}

function find() {
    return db("supplies");
}

function add(item) {
    return db("supplies").insert(item)
    .then(newSupplies => {
        return newSupplies;
    })
}