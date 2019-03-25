const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const User = db.define('User', {

});

const sync = ()=> db.sync({ force: true });
const seed = ()=> {

};

module.exports = {
    models: {
        User
    },
    sync,
    seed
};