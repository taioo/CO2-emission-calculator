/* eslint-disable no-undef */
import { expect } from "https://deno.land/x/expect/mod.ts";
import { Api } from "./api.ts";


  // npm start --  --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
  Deno.test('without output', () => {
    expect(
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'km'
      })
    ).toEqual('Your trip caused 2.6kg of CO2-equivalent.')
  })

  // npm start -- --distance 1800.5 --transportation-method large-petrol-car
  Deno.test('without unit-of-distance && output', () => {
    expect(
      Api.main({
        'transportation-method': 'large-petrol-car',
        distance: 1800.5,
        // yargs in index.ts default value ('km')
        'unit-of-distance': 'km'
      })
    ).toEqual('Your trip caused 507.7kg of CO2-equivalent.')
  })

  // npm start -- --transportation-method train --distance 14500 --unit-of-distance m
  Deno.test('unit-of-distance in m', () => {
    expect(
      Api.main({
        'transportation-method': 'train',
        distance: 14500,
        'unit-of-distance': 'm'
      })
    ).toEqual('Your trip caused 87g of CO2-equivalent.')
  })

  // npm start -- --transportation-method train --distance 14500 --unit-of-distance m --output kg
  Deno.test('unit-of-distance in m and output in kg', () => {
    expect(
      Api.main({
        'transportation-method': 'train',
        distance: 14500,
        'unit-of-distance': 'm',
        output: 'kg'
      })
    ).toEqual('Your trip caused 0.1kg of CO2-equivalent.')
  })



  Deno.test('when options are correct, then no error should be thrown', () => {
    expect(
      Api.validateOptions({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'km'
      })
    ).toBe(true)
  })

  Deno.test('when options are incorrect, then an error should be thrown', () => {
    /// // distance /////
    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: NaN,
        'unit-of-distance': 'km'
      })
    }).toThrow('option "distance" is missing.')

    expect(() => {
      const options: any = {
        'transportation-method': 'medium-diesel-car',
        'unit-of-distance': 'km'
      }
      Api.main(options)
    }).toThrow('option "distance" is missing.')})


    expect(() => {
      const options: any = {
        'transportation-method': 'medium-diesel-car',
        distance: 'a',
        'unit-of-distance': 'km'
      }

      Api.main(options)
    }).toThrow('option "distance" is not a number.')

    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: -1,
        'unit-of-distance': 'km'
      })
    }).toThrow('option "distance" is a negative number.')

    /// // unit-of-distance /////
    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'l'
      })
    }).toThrow('option "unit-of-distance" is invalid.')

    expect(() => {
      const options: any = {
        'transportation-method': 'medium-diesel-car',
        distance: 15
      }

      Api.main(options)
    }).toThrow('option "unit-of-distance" is missing.')

    /// // transportation-method /////;
    expect(() => {
      Api.main({
        'transportation-method': 'big-car',
        distance: 15,
        'unit-of-distance': 'km'
      })
    }).toThrow('option "transportation-method" is invalid.')

    expect(() => {
      const options: any = {
        distance: 15,
        'unit-of-distance': 'km'
      }

      Api.main(options)
    }).toThrow('option "transportation-method" is missing.')

    /// // output /////;
    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'km',
        output: 'x'
      })
    }).toThrow('option "output" is invalid.')
  

  Deno.test('correct output unit comes out (kg/g)', () => {
    expect(
      Api.getUnitInGrammOrKg(2565, 'kg')
    ).toBe('2.6kg')

    expect(
      Api.getUnitInGrammOrKg(565, 'kg')
    ).toBe('0.6kg')

    expect(
      Api.getUnitInGrammOrKg(544, 'kg')
    ).toBe('0.5kg')

    expect(
      Api.getUnitInGrammOrKg(2565, 'g')
    ).toBe('2565g')

    expect(
      Api.getUnitInGrammOrKg(565, 'g')
    ).toBe('565g')

    expect(
      Api.getUnitInGrammOrKg(565)
    ).toBe('565g')

    expect(
      Api.getUnitInGrammOrKg(2565)
    ).toBe('2.6kg')
  })

  Deno.test('correct Distance to Km', () => {
    expect(
      Api.getDistanceInKm(1000, 'km')
    ).toBe(1000)

    expect(
      Api.getDistanceInKm(1000, 'm')
    ).toBe(1)

    expect(
      Api.getDistanceInKm(1000)
    ).toBe(1000)
  })