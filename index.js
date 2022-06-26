"use strict";

const express = require('express');
const { Board } = require("johnny-five");
const { Fans } = require("./src/fans");

const board = new Board();
const fans = new Fans(board);

var app = express();

app.get('/', express.static('src/static'));

app.get('/api/fans', function (req, res) {
    fans.start(req.query.speed);
    res.send('{}');
});

app.get('/api/fans/fanA', function (req, res) {
    fans.fanA.start(req.query.speed);
    res.send('{}');
});

app.get('/api/fans/fanB', function (req, res) {
    fans.fanB.start(req.query.speed);
    res.send('{}');
});

app.listen(8000);
