
exports.up = function(knex) {
  return knex.schema
		.createTable('users', tbl => {
			tbl.increments('user_id');
			tbl.string('email', 128).notNullable().unique();
			tbl.string('password', 256).notNullable()
		})	
		.createTable('lists', tbl => {
			tbl.increments('list_id');
			tbl.string('list_name', 128).notNullable();
			tbl.integer('user_id')
				.unsigned()
				.notNullable()
				.references('user_id')
				.inTable('users');
		})
		.createTable('tasks', tbl => {
			tbl.increments('task_id');
			tbl.string('task_name', 256).notNullable();
			tbl.boolean('complete').default(false);
			tbl.integer('list_id')
				.unsigned()
				.notNullable()
				.references('list_id')
				.inTable('lists');
		});	
};

exports.down = function(knex) {
  return knex.schema
		.dropTableIfExists('tasks')
		.dropTableIfExists('lists')
		.dropTableIfExists('users');
};
