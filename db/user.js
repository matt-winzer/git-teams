const knex = require('./db-connection'); // db connection

module.exports = {
// function getOne(id) {
  getOne: function(id) {
    return knex('user')
      .where('id', id)
      .first();
  }
};
