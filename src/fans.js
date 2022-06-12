"use strict";

const { Motor } = require("johnny-five");

const Fan = function(motor) {
    this.motor = motor;
}

function convertSpeed(speed) {
    if (speed < 0 || speed > 100) {
        throw new Error(`Invalid speed "${speed}", valid range [0, 100]`);
    }

    return speed * 2.55;
}

Fan.prototype.start = function(speed) {
    const actualSpeed = convertSpeed(speed);
    if (this.motor) {
        this.motor.start(actualSpeed);
    }
}

const Fans = function(board) {
    this.board = board;
    this.fanA = null;
    this.fanB = null;

    this.board.on("ready", () => this.onBoardReady());
}

Fans.prototype.start = function(speed) {
    this.fanA.start(speed);
    this.fanB.start(speed);
}

Fans.prototype.onBoardReady = function() {
    this.fanA = new Fan(new Motor(Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1.A));
    this.fanB = new Fan(new Motor(Motor.SHIELD_CONFIGS.ARDUINO_MOTOR_SHIELD_R3_1.B));

    this.board.repl.inject({
        fanA: this.fanA,
        fanB: this.fanB,
        fans: this,
    })
}

module.exports = {
    Fans: Fans,
}