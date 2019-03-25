const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const Player = db.define('player', {
    name: Sequelize.STRING
});

const Team = db.define('team', {
    name: Sequelize.STRING
});

const sync = ()=> db.sync({ force: true });
const seed = ()=> {
    return Promise.all([
        Player.create({ name: 'Andy' }),
        Player.create({ name: 'Bill' }),
        Player.create({ name: 'Chris' })     
    ])
        .then(()=> {
            return Promise.all([
                Team.create({ name: 'Giants' }),
                Team.create({ name: 'Jets' }),
                Team.create({ name: 'Bills' })
            ]);
        });
};

module.exports = {
    models: {
        Player,
        Team
    },
    sync,
    seed
};