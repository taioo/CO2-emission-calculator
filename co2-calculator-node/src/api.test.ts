/* eslint-disable no-undef */
import { Api } from './api'
import * as child from 'child_process'

describe('Example Use Cases', () => {
  // npm start --  --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
  test('without output', () => {
    expect(
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'km'
      })
    ).toEqual('Your trip caused 2.6kg of CO2-equivalent.')
  })

  // npm start -- --distance 1800.5 --transportation-method large-petrol-car
  test('without unit-of-distance && output', () => {
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
  test('unit-of-distance in m', () => {
    expect(
      Api.main({
        'transportation-method': 'train',
        distance: 14500,
        'unit-of-distance': 'm'
      })
    ).toEqual('Your trip caused 87g of CO2-equivalent.')
  })

  // npm start -- --transportation-method train --distance 14500 --unit-of-distance m --output kg
  test('unit-of-distance in m and output in kg', () => {
    expect(
      Api.main({
        'transportation-method': 'train',
        distance: 14500,
        'unit-of-distance': 'm',
        output: 'kg'
      })
    ).toEqual('Your trip caused 0.1kg of CO2-equivalent.')
  })
})

describe('Validation', () => {
  test('when options are correct, then no error should be thrown', () => {
    expect(
      Api.validateOptions({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'km'
      })
    ).toBe(true)
  })

  test('when options are incorrect, then an error should be thrown', () => {
    /// // distance /////
    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: NaN,
        'unit-of-distance': 'km'
      })
    }).toThrowError(Error('option "distance" is missing.'))

    expect(() => {
      const options: any = {
        'transportation-method': 'medium-diesel-car',
        'unit-of-distance': 'km'
      }
      Api.main(options)
    }).toThrowError(Error('option "distance" is missing.'))

    expect(() => {
      const options: any = {
        'transportation-method': 'medium-diesel-car',
        distance: 'a',
        'unit-of-distance': 'km'
      }

      Api.main(options)
    }).toThrowError(TypeError('option "distance" is not a number.'))

    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: -1,
        'unit-of-distance': 'km'
      })
    }).toThrowError(TypeError('option "distance" is a negative number.'))

    /// // unit-of-distance /////
    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'l'
      })
    }).toThrowError(TypeError('option "unit-of-distance" is invalid.'))

    expect(() => {
      const options: any = {
        'transportation-method': 'medium-diesel-car',
        distance: 15
      }

      Api.main(options)
    }).toThrowError(Error('option "unit-of-distance" is missing.'))

    /// // transportation-method /////;
    expect(() => {
      Api.main({
        'transportation-method': 'big-car',
        distance: 15,
        'unit-of-distance': 'km'
      })
    }).toThrowError(TypeError('option "transportation-method" is invalid.'))

    expect(() => {
      const options: any = {
        distance: 15,
        'unit-of-distance': 'km'
      }

      Api.main(options)
    }).toThrowError(Error('option "transportation-method" is missing.'))

    /// // output /////;
    expect(() => {
      Api.main({
        'transportation-method': 'medium-diesel-car',
        distance: 15,
        'unit-of-distance': 'km',
        output: 'x'
      })
    }).toThrowError(TypeError('option "output" is invalid.'))
  })

  test('correct output unit comes out (kg/g)', () => {
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

  test('correct Distance to Km', () => {
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

  test('end 2 end', (done) => {
    const command = './co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km'
    const expectedOut = 'Your trip caused 2.6kg of CO2-equivalent.'

    child.exec(command, (_error: child.ExecException | null, stdout: string) => {
      // error from cmd output
      expect(stdout).toBe(expectedOut + '\n')
      done()
    })
  })

  /*

        test('end 2 end', (done) => {

        let command = "./co2-calculator --transportation-method medium-diesel-car --distance 15 --unit-of-distance km"
        let expectedOut = "Your trip caused 2.6kg of CO2-equivalent."

        child.exec(command, (error: child.ExecException|null, stdout: string) => {
            // error from cmd output
            if (error) {
                fail(`exec error: ${error}`);
            } else {
                expect(
                    stdout
                ).toBe(expectedOut + "\n");
            }

            done();
        });

    });

    */
})
