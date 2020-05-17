"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var argv = yargs.scriptName("co2-calculator")
    .options({
    'name': { type: 'string', demandOption: true }
}).argv;
console.log(argv.name);
//yarn start --co2-calcolatro --name thaer 
