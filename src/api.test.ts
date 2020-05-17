import {main} from './api';
// yarn test


test('General Test', () => {
    expect(
    main({
        'transportation-method': 'medium-diesel-car',
        'distance': 15,
        'unit-of-distance': 'km',
    })
    ).toEqual('Your trip caused 2.6kg of CO2-equivalent.');
});

