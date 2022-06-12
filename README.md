# winduino

A tiny demo project to control two fans on with an arduino.

## Setup

### Hardware

* Arduino UNO rev3
* MotorShield rev3
* 2 Brushless 12V DC Fans plugged in A and B on the motor shield
* External 12V


### Arduino firmware

This project is using `johnny-five` to communicate with the Arduino which relies on the `StandardFirmataPlus` firmware.

See: http://johnny-five.io/platform-support/#arduino-uno


### Software

Installing dependencies
```
make deps
```

Running the server
```
make run-webserver
```
