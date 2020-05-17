import { Api } from './api';


describe('Basics', () => {
    // yarn start --co2-calcolatro  --transportation-method medium-diesel-car --distance 15 --unit-of-distance km
    test('General Test', () => {
        expect(
            Api.main({
                'transportation-method': 'medium-diesel-car',
                'distance': 15,
                'unit-of-distance': 'km',
            })
        ).toEqual('Your trip caused 2.6kg of CO2-equivalent.');
    });

});


describe('Validation', () => {

    test('check Test', () => {
        expect(

            Api.isTransportationMethodInCo2()

        ).toBe(true);

        expect(() => {
            throw new Error('option "distance" is missing.')
        }).toThrowError(Error('option "distance" is missing.'));

    });
    test('check Test', () => {
        expect(

            Api.isDistanceCorrect()

        ).toBe(true);
    });

    test('check Test', () => {
        expect(

            Api.getUnitOfDistanceInKmOrM(2565, 'kg')

        ).toBe('2.6kg');
    });

});
