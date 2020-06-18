const db = require("../data/connections.js");

module.exports = {
    find,
    add,
    remove
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

function remove(itemId) {
    return db("supplies").del().where({id: itemId});
}