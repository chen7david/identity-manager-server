module.exports = {

    users: (table) => {
        table.increments().primary()
        table.integer('user_id').unique().notNullable()
        table.string('profile_picture').unique()
        table.string('display_name')
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
        table.boolean('confirmed')
        table.boolean('suspended')
        table.boolean('disabled')
        table.timestamps(true, true)
    },

    roles: (table) => {
        table.increments().primary()
        table.string('name').unique().notNullable()
        table.text('description')
        table.timestamps(true, true)
    },

    user_roles: (table) => {
        table.increments().primary()
        table.unique(['user_id', 'role_id'])
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE').index().notNullable()
        table.integer('role_id').references('id').inTable('roles').onDelete('CASCADE').index().notNullable()
        table.timestamps(true, true)
    }
}