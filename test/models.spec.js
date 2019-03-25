const expect = require('chai').expect;
const db = require('../db');
const { User } = db.models;

describe('users', ()=> {
    beforeEach(()=> {
        return db.sync()
            .then(()=> db.seed());
    });
    it('there are 3 users', ()=> {
        return User.findAll({})
            .then( users => expect(users.length).to.equal(3));
    });
})