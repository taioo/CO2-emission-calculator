
enum CO2 {

    //Small 
    'small-diesel-car' = 142,
    'small-petrol-car' = 154,
    'small-plugin-hybrid-car' = 73,
    'small-electric-car' = 50,

    //Medium
    'medium-diesel-car' = 171,
    'medium-petrol-car' = 192,
    'medium-plugin-hybrid-car' = 110,
    'medium-electric-car' = 58,

    //Large
    'large-diesel-car' = 209,
    'large-petrol-car' = 282,
    'large-plugin-hybrid-car' = 126,
    'large-electric-car' = 73,

    'bus' = 27,
    'train' = 6
}

export class Api {

    static validateOptions(options: { distance: any; "transportation-method"?: string; "unit-of-distance"?: string; output?: string | undefined; }) {

        if (!options.distance) {
            throw new Error('option "distance" is missing.')
        } else if (isNaN(options.distance)) {
            throw new TypeError('option "distance" is not a number.')
        }

        return true;
    }

    static isTransportationMethodInCo2() {


        return true;
    }

    static isDistanceCorrect() {

        return true;
    }

    static getUnitOfDistanceInKmOrM(distance: number, unit?: 'kg' | 'g') {

        let text = '';
        let output: number = distance;

        if (unit == 'kg') {
            output = (output / 1000)
            output = Math.round((output) * 10) / 10
        }

        text = '' + output + unit;
        return text;
    }


    static main(options: {
        'distance': number;
        'transportation-method': string;
        'unit-of-distance': string;
        'output'?: string;
    }): string {

        var transportationMethod: CO2 = CO2[options['transportation-method'] as keyof typeof CO2];

        const co2Result = transportationMethod * options.distance;
        let text = '';

        Api.validateOptions(options);

        text = Api.getUnitOfDistanceInKmOrM(co2Result, 'kg');
        return `Your trip caused ${text} of CO2-equivalent.`;
    }
}