# CO2-emission-calculator

This CLI tool returns the amount of CO2-emission that will be caused when traveling a given distance using a given transportation method.


Transportation methods in CO2e per passenger per km:
* Small cars:
    - small-diesel-car : 142g
    - small-petrol-car : 154g 
    - small-plugin-hybrid-car : 73g 
    - small-electric-car : 50g

* Medium cars: 
    - medium-diesel-car : 171g
    - medium-petrol-car : 192g 
    - medium-plugin-hybrid-car : 110g 
    - medium-electric-car : 58g

* Large cars:
    - large-diesel-car : 209g
    - large-petrol-car : 282g 
    - large-plugin-hybrid-car : 126g 
    - large-electric-car : 73g

* bus : 27g train : 6g


Source: [Defra Greenhouse Gas Conversion Factors 2019](https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2019)


It is build with NodeJS, therefore, the installation of NodeJS. It is tested successful with v12.10.0.

## Setup
Before you can make use of the application, it is required a terminal to install the dependencies and to compile with the following commands:
```
bash setup
```

## Testing
As part of the application are also unit tests that are using the [jest](https://jestjs.io) Framework.
You can run the tests and read test coverages with following command:
```
npm test
```
to see coverage 
```
npm run coverage
```

## Run tool
The tool can be called with a numeric distance , a unit-of-distance (kilometer km or meter m ) and a transportation- method.

You can run the application like in the following example commands:


```
./co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```

```
./co2-calculator --distance 1800.5 --transportation-method large-petrol-car
```

```
./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m
```

```
./co2-calculator --transportation-method train --distance 14500 --unit-of-distance m --output kg
```

### Run with Node

 you can run the application with node in the following examples:

```
npm start -- --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```

```
node output/index.js --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```
<br>
<br>

# Run/Test in Deno

You can run the application in `Deno` in the 'deno' folder.
```
cd deno
```
Or open it in VS-code

example commands:

```
deno run index.ts --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```

```
deno run index.ts --distance 1800.5 --transportation-method large-petrol-car
```

```
deno run index.ts --transportation-method train --distance 14500 --unit-of-distance m
```
```
deno run index.ts --transportation-method train --distance 14500 --unit-of-distance m --output kg
```


Run tests

```
deno test
```