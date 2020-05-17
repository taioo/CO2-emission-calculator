"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var api_1 = require("./api");
var argv = yargs.scriptName("co2-calculator")
    .options({
    'transportation-method': { type: 'string', demandOption: true },
    'distance': { type: 'number', demandOption: true },
    'unit-of-distance': { type: 'string', demandOption: false, default: 'km' },
    'output': { type: 'string', demandOption: false },
}).argv;
var result = api_1.main({
    'distance': argv.distance,
    'transportation-method': argv["transportation-method"],
    'unit-of-distance': argv["unit-of-distance"],
    'output': argv.output
});
console.log(result);
// yarn start --co2-calcolatro  --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
