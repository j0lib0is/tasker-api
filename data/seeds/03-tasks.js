exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {task_name: 'Lorem ipsum', complete: false, list_id: 1},
    {task_name: 'Lorem ipsum', complete: true, list_id: 1},
    {task_name: 'Lorem ipsum', complete: false, list_id: 2},
    {task_name: 'Lorem ipsum', complete: true, list_id: 2},
    {task_name: 'Lorem ipsum', complete: false, list_id: 3},
    {task_name: 'Lorem ipsum', complete: true, list_id: 3},
    {task_name: 'Lorem ipsum', complete: false, list_id: 4},
    {task_name: 'Lorem ipsum', complete: true, list_id: 4},
    {task_name: 'Lorem ipsum', complete: false, list_id: 5},
    {task_name: 'Lorem ipsum', complete: true, list_id: 5},
    {task_name: 'Lorem ipsum', complete: false, list_id: 6},
    {task_name: 'Lorem ipsum', complete: true, list_id: 6}
  ]);
};
