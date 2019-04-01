const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { logging: false });

const Player = db.define('player', {
  info_player: db.Sequelize.STRING,
  info_team: db.Sequelize.STRING,
  info_position: db.Sequelize.STRING,
  info_age: db.Sequelize.DECIMAL,
  games_played: db.Sequelize.DECIMAL,
  games_started: db.Sequelize.DECIMAL,
  pass_completed: db.Sequelize.DECIMAL,
  pass_attempted: db.Sequelize.DECIMAL,
  pass_yards: db.Sequelize.DECIMAL,
  pass_touchdowns: db.Sequelize.DECIMAL,
  pass_interceptions: db.Sequelize.DECIMAL,
  rush_attempts: db.Sequelize.DECIMAL,
  rush_yards: db.Sequelize.DECIMAL,
  rush_yardsPerAttempted: db.Sequelize.DECIMAL,
  rush_touchdowns: db.Sequelize.DECIMAL,
  reception_targets: db.Sequelize.DECIMAL,
  reception_receptions: db.Sequelize.DECIMAL,
  reception_yards: db.Sequelize.DECIMAL,
  reception_yardsPerReception: db.Sequelize.DECIMAL,
  fumble_fumbles: db.Sequelize.DECIMAL,
  fumble_fumblesLost: db.Sequelize.DECIMAL,
  scoring_touchdowns: db.Sequelize.DECIMAL,
  scoring_twoPointConversion: db.Sequelize.DECIMAL,
  scoring_twoPointConversionPasses: db.Sequelize.DECIMAL,
  fantasy_standardPoints: db.Sequelize.DECIMAL,
  fantasy_pprPoints: db.Sequelize.DECIMAL,
  fantasy_vdb: db.Sequelize.DECIMAL,
  fantasy_positionalRankings: db.Sequelize.DECIMAL,
  fantasy_overallRankings: db.Sequelize.DECIMAL
});

const Team = db.define('team', {
    name: Sequelize.STRING
});

Player.hasOne(Team);

const sync = ()=> db.sync({ force: true });
const seed = ()=> {

    let andy, bill, chris, giants, jets, bills;

    return Promise.all([
        Player.create({ info_player: "Andy" }),
        Player.create({ info_player: 'Bill' }),
        Player.create({ info_player: 'Chris' })     
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