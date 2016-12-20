const knex = require('./db-connection'); // db connection

module.exports = {
  getByUser: function(id){
    return knex('team')
    .where('user_id', id);
  },

  addTeam: function(body){
    return knex('team')
    .insert(body)
    .returning('id');
  }

};
