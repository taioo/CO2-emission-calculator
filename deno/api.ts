
enum CO2 {

    // Small
    'small-diesel-car' = 142,
    'small-petrol-car' = 154,
    'small-plugin-hybrid-car' = 73,
    'small-electric-car' = 50,

    // Medium
    'medium-diesel-car' = 171,
    'medium-petrol-car' = 192,
    'medium-plugin-hybrid-car' = 110,
    'medium-electric-car' = 58,

    // Large
    'large-diesel-car' = 209,
    'large-petrol-car' = 282,
    'large-plugin-hybrid-car' = 126,
    'large-electric-car' = 73,

    'bus' = 27,
    'train' = 6
}

export class Api {
  static validateOptions (options: any) {
    if (!options.distance) {
      throw new Error('option "distance" is missing.')
    } else if (isNaN(options.distance)) {
      throw new TypeError('option "distance" is not a number.')
    } else if (options.distance < 0) {
      throw new TypeError('option "distance" is a negative number.')
    } else if (!options['unit-of-distance']) {
      throw new Error('option "unit-of-distance" is missing.')
    } else if (options['unit-of-distance'] !== 'km' && options['unit-of-distance'] !== 'm') {
      throw new TypeError('option "unit-of-distance" is invalid.')
    } else if (!options['transportation-method']) {
      throw new Error('option "transportation-method" is missing.')
    } else if (!(CO2[options['transportation-method'] as keyof typeof CO2] in CO2)) {
      throw new TypeError('option "transportation-method" is invalid.')
    } else if (options.output && options.output !== 'kg' && options.output !== 'g') {
      throw new TypeError('option "output" is invalid.')
    }

    return true
  }

  static getUnitInGrammOrKg (co2Result: number, output?: string) {
    let result: number = co2Result
    let finalUnit = 'g'

    if ((!output && co2Result > 999) || output === 'kg') {
      result = (result / 1000)
      result = Math.round((result) * 10) / 10
      finalUnit = 'kg'
    }

    // if (!output && co2Result > 999) {
    //     result = (result / 1000);
    //     result = Math.round((result) * 10) / 10;
    //     finalUnit = 'kg';
    // }

    // else if (output == 'kg') {
    //     result = (result / 1000);
    //     result = Math.round((result) * 10) / 10;
    //     finalUnit = 'kg';
    // }

    return result + finalUnit
  }

  static getDistanceInKm (distance: number, unit?: string) {
    let finalDistance: number = distance
    if (unit === 'm') {
      finalDistance = finalDistance / 1000
    }
    return finalDistance
  }

  static main (options: {
        'distance': number;
        'transportation-method': string;
        'unit-of-distance': string;
        'output'?: string;
    }): string {
    Api.validateOptions(options)

    const transportationMethod = CO2[options['transportation-method'] as keyof typeof CO2]
    const distance = Api.getDistanceInKm(options.distance, options['unit-of-distance'])

    const co2Result = transportationMethod * distance
    let text = ''

    Api.validateOptions(options)

    text = Api.getUnitInGrammOrKg(co2Result, options.output)
    return `Your trip caused ${text} of CO2-equivalent.`
  }
}
