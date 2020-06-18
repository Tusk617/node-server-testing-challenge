
exports.seed = function(knex) {
  return knex("supplies").insert([
    {item: "Pizza", quantity: 5},
    {item: "Soda", quantity: 20},
    {item: "Party Hats", quantity: 10},
    {item: "House", quantity: 1},
    {item: "Andrew W.K", quantity: 1}
  ])
};
