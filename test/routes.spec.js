const expect = require('chai').expect;
const db = require('../db');
const { User, Page } = db.models;
const app = require('supertest')(require('../app'));

describe('Testing Routes', ()=> {
    beforeEach(()=> {
        return db.sync()
            .then(()=> db.seed());
    })
});

it("GET /players", ()=> {
    return app.get('/players')
        .expect(200)
        .then(players => expect(players.body.length).to.equal(3));
})
it("POST /player", ()=> {
    return app.post('/player/Dave')
        .expect(200)
        .then(player => expect(player.body.name).to.equal('Dave'))
})
it("GET /teams", ()=> {
    return app.get('/teams')
        .expect(200)
        .then(teams => expect(teams.body.length).to.equal(3));
});