exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {email: 'email@outlook.com', password: '1234'},
    {email: 'email@gmail.com', password: '1234'},
    {email: 'email@yahoo.com', password: '1234'}
  ]);
};
