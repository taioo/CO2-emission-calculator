import yargs = require('yargs');
import {main} from './api';

const argv = yargs.scriptName("co2-calculator")
  .options({
    'transportation-method': { type: 'string', demandOption: true },
    'distance': { type: 'number', demandOption: true },
    'unit-of-distance': { type: 'string', demandOption: false, default: 'km' },
    'output': { type: 'string', demandOption: false },
  }
  ).argv;

const result = main({
  'distance': argv.distance,
  'transportation-method': argv["transportation-method"],
  'unit-of-distance': argv["unit-of-distance"],
  'output': argv.output
});

console.log(result);

  // yarn start --co2-calcolatro  --transportation-method medium-diesel-car --distance 15 --unit-of-distance km