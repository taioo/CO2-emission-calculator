# CO2-emission-calculator

This CLI application returns the amount of CO2-emission that will be caused when traveling a given distance using a given transportation method.


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


<br>
<br>



# Run application
The application can be called with a numeric distance , a unit-of-distance (kilometer km or meter m ) and a transportation- method.

There are two builds. One is build with [Node](#node) V14 and another with [Deno](#deno) V1.6 .

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


<br>
<br>


# Node

Go directory & launch in Visual Studio Code.
```
cd co2-calculator-node && code
```

## Setup & run
Before you can make use of the application, it is required a terminal to install the dependencies and to compile with the following commands:
```
zsh run-node
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

## Example commands:

 you can run the application with node in the following examples:

```
npm start -- --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```

```
node output/index.js --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
```
<br>
<br>

# Deno

Go directory & launch it in Visual Studio Code.
```
cd co2-calculator-deno && code
```

## Run
You can run this shell to demonstrate the commands in it, and there is no need to install dependencies.
```
zsh run-deno
```

## Example commands:

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


## Testing

```
deno test
```