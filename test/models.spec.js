const expect = require('chai').expect;
const db = require('../db');
const { Player, Team } = db.models;

describe('database is synced and seeded', ()=> {
    beforeEach(()=> {
        return db.sync()
            .then(()=> db.seed());
    });
    it('there are 3 players', ()=> {
        return Player.findAll({})
            .then( players => expect(players.length).to.equal(3));
    });
    it('there are 3 teams', ()=> {
        return Team.findAll({})
            .then(teams => expect(teams.length).to.equal(3));
    });
    it('Andy belongs to the Giants', ()=> {
        return Player.findOne({
            where: { name: 'Andy' },
            include: [Team]
        }) 
            .then(andy => expect(andy.team.name).to.equal('Giants'));
    })
})