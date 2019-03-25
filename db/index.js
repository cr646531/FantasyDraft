const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);

const Player = db.define('player', {
    name: Sequelize.STRING
});

const Team = db.define('team', {
    name: Sequelize.STRING
});

Player.hasOne(Team);

const sync = ()=> db.sync({ force: true });
const seed = ()=> {

    let andy, bill, chris, giants, jets, bills;

    return Promise.all([
        Player.create({ name: 'Andy' }),
        Player.create({ name: 'Bill' }),
        Player.create({ name: 'Chris' })     
    ])
        .then((players)=> {
            [andy, bill, chris] = players;
            return Promise.all([
                Team.create({ name: 'Giants' }),
                Team.create({ name: 'Jets' }),
                Team.create({ name: 'Bills' })
            ]); 
        })
        .then((teams) => {
            [giants, jets, bills] = teams;
            return Promise.all([
                andy.setTeam(giants),
                bill.setTeam(jets),
                chris.setTeam(bills)
            ])
        })
};

module.exports = {
    models: {
        Player,
        Team
    },
    sync,
    seed
};