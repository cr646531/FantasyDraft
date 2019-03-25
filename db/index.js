const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define('User', {
    name: Sequelize.STRING
});

const sync = ()=> db.sync({ force: true });
const seed = ()=> {
    return Promise.all([
        User.create({ name: 'Andy' }),
        User.create({ name: 'Bill' }),
        User.create({ name: 'Chris' })
    ]);
};

module.exports = {
    models: {
        User
    },
    sync,
    seed
};