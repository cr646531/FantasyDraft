const express = require('express');
const app = express();
const db = require('./db');
const { Player, Team } = db.models;

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/players', (req, res, err)=> {
    Player.findAll({})
        .then(players => {
            res.send(players);
        })
        .catch((err)=> {
            throw err;
        })
})

app.post('/player/:name', (req, res, err) => {
    let name = req.params.name;
    console.log(name);
    Player.create({
        name: name
    })
        .then(player => res.send(player));
})

app.get('/teams', (req, res)=> {
    Team.findAll({})
        .then(teams => {
            res.send(teams);
        })
})

module.exports = app;