module.exports = {
    accounts: (table) => {
        table.integer('user_id').unique().notNullable()
        table.string('profile_picture').unique()
        table.string('display_name')
        table.string('username').unique().notNullable()
        table.string('password').notNullable()
        table.boolean('confirmed')
        table.boolean('suspended')
        table.boolean('disabled')
    }
}