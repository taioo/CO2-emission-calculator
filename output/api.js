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
        return true;
    };
    Api.isTransportationMethodInCo2 = function () {
        return true;
    };
    Api.isDistanceCorrect = function () {
        return true;
    };
    Api.getUnitOfDistanceInKmOrM = function (distance, unit) {
        var text = '';
        var output = distance;
        if (unit == 'kg') {
            output = (output / 1000);
            output = Math.round((output) * 10) / 10;
        }
        text = '' + output + unit;
        return text;
    };
    Api.main = function (options) {
        var transportationMethod = CO2[options['transportation-method']];
        var co2Result = transportationMethod * options.distance;
        var text = '';
        Api.validateOptions(options);
        text = Api.getUnitOfDistanceInKmOrM(co2Result, 'kg');
        return "Your trip caused " + text + " of CO2-equivalent.";
    };
    return Api;
}());
exports.Api = Api;
