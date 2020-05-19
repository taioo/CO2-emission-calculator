# CO2-emission-calculator
It is build with NodeJS, therefore, the installation of NodeJS. It is tested successful with v12.10.0.

## Setup
Before you can make use of the application, it is required a terminal to install the dependencies and to compile with the following commands:
```
bash setup
```

## Testing
As part of the application are also unit tests that are using the [jest](https://jestjs.io) Framework.
You can run the tests with following command:
```
npm test
```

## Run application
You can run the application like in the following example commands:

*   `./co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km`

*   `./co2-calculator --distance 1800.5 --transportation-method large-petrol-car`

*   `./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m`

*   `./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m --output kg`

### Run with Node

 you can run the application with node in the following examples:

*   `npm start -- --transportation-method medium-diesel-car --distance 15 --unit-of-distance km`

*   `node output/index.js --transportation-method medium-diesel-car --distance 15 --unit-of-distance km`

You can run the tests with following command:
```
npm test
```