"use strict";
exports.__esModule = true;
var base_ship_1 = require("./base-ship");
var starfigther_1 = require("./starfigther");
var _ = require("lodash");
console.log(_.pad("TypeScript", 100, '='));
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("This is episode " + episode);
var call = function (name) { return console.log("Do you copy, " + name); };
call('BB-8');
var ship = new base_ship_1.Spacecraft('hyperdrive');
ship.jumpToHiperSpace();
var falcon = new starfigther_1.MillenniumFalcon();
falcon.jumpToHiperSpace();
