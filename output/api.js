"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
var CO2;
(function (CO2) {
    //Small 
    CO2[CO2["small-diesel-car"] = 142] = "small-diesel-car";
    CO2[CO2["small-petrol-car"] = 154] = "small-petrol-car";
    CO2[CO2["small-plugin-hybrid-car"] = 73] = "small-plugin-hybrid-car";
    CO2[CO2["small-electric-car"] = 50] = "small-electric-car";
    //Medium
    CO2[CO2["medium-diesel-car"] = 171] = "medium-diesel-car";
    CO2[CO2["medium-petrol-car"] = 192] = "medium-petrol-car";
    CO2[CO2["medium-plugin-hybrid-car"] = 110] = "medium-plugin-hybrid-car";
    CO2[CO2["medium-electric-car"] = 58] = "medium-electric-car";
    //Large
    CO2[CO2["large-diesel-car"] = 209] = "large-diesel-car";
    CO2[CO2["large-petrol-car"] = 282] = "large-petrol-car";
    CO2[CO2["large-plugin-hybrid-car"] = 126] = "large-plugin-hybrid-car";
    CO2[CO2["large-electric-car"] = 73] = "large-electric-car";
    CO2[CO2["bus"] = 27] = "bus";
    CO2[CO2["train"] = 6] = "train";
})(CO2 || (CO2 = {}));
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.validateOptions = function (options) {
        if (!options.distance) {
            throw new Error('option "distance" is missing.');
        }
        else if (isNaN(options.distance)) {
            throw new TypeError('option "distance" is not a number.');
        }
        else if (options.distance < 0) {
            throw new TypeError('option "distance" is a negative number.');
        }
        else if (!options['unit-of-distance']) {
            throw new Error('option "unit-of-distance" is missing.');
        }
        else if (options['unit-of-distance'] != 'km' && options['unit-of-distance'] != 'm') {
            throw new TypeError('option "unit-of-distance" is invalid.');
        }
        else if (!options['transportation-method']) {
            throw new Error('option "transportation-method" is missing.');
        }
        else if (!(CO2[options['transportation-method']] in CO2)) {
            throw new TypeError('option "transportation-method" is invalid.');
        }
        else if (options.output && options.output != 'kg' && options.output != 'g') {
            throw new TypeError('option "output" is invalid.');
        }
        return true;
    };
    Api.getUnitInGrammOrKg = function (co2Result, output) {
        var result = co2Result;
        var finalUnit = 'g';
        if ((!output && co2Result > 999) || output === 'kg') {
            result = (result / 1000);
            result = Math.round((result) * 10) / 10;
            finalUnit = 'kg';
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
        return result + finalUnit;
    };
    Api.getDistanceInKm = function (distance, unit) {
        var finalDistance = distance;
        if (unit == 'm') {
            finalDistance = finalDistance / 1000;
        }
        return finalDistance;
    };
    Api.main = function (options) {
        Api.validateOptions(options);
        var transportationMethod = CO2[options['transportation-method']];
        var distance = Api.getDistanceInKm(options.distance, options["unit-of-distance"]);
        var co2Result = transportationMethod * distance;
        var text = '';
        Api.validateOptions(options);
        text = Api.getUnitInGrammOrKg(co2Result, options.output);
        return "Your trip caused " + text + " of CO2-equivalent.";
    };
    return Api;
}());
exports.Api = Api;
