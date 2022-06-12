"use strict";

const { Board } = require("johnny-five");
const { Fans } = require("./src/fans");

const board = new Board();
const fans = new Fans(board);
