const bcrypt = require('bcrypt');
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('users').del();
    await knex.raw('ALTER TABLE `users` AUTO_INCREMENT = 1');
    await knex('users').insert([
        {
            type: 'Admin',
            name: 'Admin',
            email: 'admin@cart.com',
            mobile: '+201228277204',
            password: bcrypt.hashSync('cart@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('admin', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            is_confirmed: 1,
        },
        {
            type: 'Guest',
            name: 'user1',
            email: 'user1@cart.com',
            mobile: '+201228277204',
            password: bcrypt.hashSync('cart@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('user1', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            is_confirmed: 1,
        },
        {
            type: 'Guest',
            name: 'user2',
            email: 'user2@cart.com',
            mobile: '+201228277204',
            password: bcrypt.hashSync('cart@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('user2', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            is_confirmed: 1,
        },
        {
            type: 'Guest',
            name: 'user3',
            email: 'user3@cart.com',
            mobile: '+201228277204',
            password: bcrypt.hashSync('cart@12345', process.env.HASH_SALT),
            token: bcrypt.hashSync('user3', process.env.HASH_SALT) + bcrypt.hashSync(Math.random().toString(), process.env.HASH_SALT),
            is_active: 1,
            is_confirmed: 1,
        },
    ]);
};
