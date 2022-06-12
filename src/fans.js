"use strict";

const { Motor } = require("johnny-five");

const Fans = function(board) {
    this.board = board;
    this.motorA = null;
    this.motorB = null;

    this.board.on("ready", () => this.onBoardReady());
}

Fans.prototype.start = function(speed) {
    if (this.motorA) {
        this.motorA.start(speed);
    }
    if (this.motorB) {
        this.motorB.start(speed);
    }
}

Fans.prototype.onBoardReady = function() {
    this.motorA = new Motor(Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1.A);
    this.motorB = new Motor(Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1.B);

    this.board.repl.inject({
        motorA: this.motorA,
        motorB: this.motorB,
        fans: this,
    })
}

module.exports = {
    Fans: Fans,
}