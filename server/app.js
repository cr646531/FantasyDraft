const express = require('express');
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const db = require('./db');
const { Player, Team } = db.models;
const format = require('./format');
const path = require('path');

var pageToVisit = "https://www.pro-football-reference.com/years/2018/fantasy.htm";

app.use(require('body-parser').json());


app.use('/dist', express.static(path.join(__dirname, '../dist')));

const index = path.join(__dirname, '../index.html');

app.get('/', (req, res)=> {
  res.sendFile(index);
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
        info_player: "Dave"
    })
        .then(player => res.send(player));
})

app.get('/teams', (req, res)=> {
    Team.findAll({})
        .then(teams => {
            res.send(teams);
        })
})

app.get('/data', (req, res) => {
    request(pageToVisit, function(error, response, body) {
  
      if(error) {
        console.log("Error: " + error);
      }
  
      if(response.statusCode === 200) {
        var $ = cheerio.load(body);
        var text = $('tbody').html();
        var rawData = text.split('<td')
        var playerData = format(rawData);
      }
  
      playerData.map(player => 
        Player.create(player)
      );
    });

    console.log('Players have been created');

    res.send(202);

  });

module.exports = app;