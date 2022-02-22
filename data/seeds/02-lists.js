exports.seed = function(knex, Promise) {
  return knex('lists').insert([
    {list_name: 'Shopping List', user_id: 1},
    {list_name: 'Honey-Do List', user_id: 1},
    {list_name: 'Supplies List', user_id: 2},
    {list_name: 'Grocery List', user_id: 2},
    {list_name: 'Chores List', user_id: 3},
    {list_name: 'Packing List', user_id: 3}
  ]);
};
