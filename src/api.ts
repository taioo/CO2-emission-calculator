
export enum CO2 {

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




    export function main(options: {
        'distance': number;
        'transportation-method': string;
        'unit-of-distance': string;
        'output'?: string;
    }): string {
        
        const co2Result = CO2['medium-diesel-car'] * options.distance;

        let output: number = co2Result;

        if (output >= 1000) {
            output = (output / 1000)
            output = Math.round((output) * 10) / 10
        }

        return `Your trip caused ${output}kg of CO2-equivalent.`;
    }