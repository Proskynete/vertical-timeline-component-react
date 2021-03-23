"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDate = exports.transformDate = exports.completeWith0 = void 0;
var index_1 = require("../config/index");
var completeWith0 = function (n) {
    return n.toLocaleString().length < 2 ? "0" + n : n;
};
exports.completeWith0 = completeWith0;
var transformDate = function (_a) {
    var date = _a.date, lang = _a.lang, type = _a.type;
    var year = parseInt(date.split('/')[0], 10);
    var month = parseInt(date.split('/')[1], 10);
    var day = parseInt(date.split('/')[2], 10);
    switch (type) {
        case 'L':
            if (lang === 'en') {
                return "" + (month ? exports.completeWith0(month) + "/" : '') + (day ? exports.completeWith0(day) + "/" : '') + year;
            }
            else if (lang === 'es') {
                return "" + (day ? exports.completeWith0(day) + "/" : '') + (month ? exports.completeWith0(month) + "/" : '') + year;
            }
            else {
                return "" + (day && month
                    ? exports.completeWith0(day) + "." + exports.completeWith0(month) + "." + year
                    : "" + (month ? exports.completeWith0(month) + "/" : '') + year);
            }
        case 'l':
            if (lang === 'en') {
                return "" + (month ? month + "/" : '') + (day ? day + "/" : '') + year;
            }
            else if (lang === 'es') {
                return "" + (day ? day + "/" : '') + (month ? month + "/" : '') + year;
            }
            else {
                return "" + (day && month
                    ? day + "." + month + "." + year
                    : "" + (month ? month + "/" : '') + year);
            }
        case 'll':
            if (lang === 'en') {
                return "" + (month ? "" + index_1.monthArray[lang][month - 1] : '') + (day ? " " + exports.completeWith0(day) : '') + (day || month ? ', ' : '') + year;
            }
            else if (lang === 'es') {
                return "" + (day ? day + " de " : '') + (month ? index_1.monthArray[lang][month - 1] + ", " : '') + year;
            }
            else {
                return "" + (day ? day + ". " : '') + (month ? index_1.monthArray[lang][month - 1] + " " : '') + year;
            }
    }
};
exports.transformDate = transformDate;
exports.mapDate = {
    en: {
        L: function (date) { return exports.transformDate({ date: date, lang: 'en', type: 'L' }); },
        l: function (date) { return exports.transformDate({ date: date, lang: 'en', type: 'l' }); },
        ll: function (date) { return exports.transformDate({ date: date, lang: 'en', type: 'll' }); },
    },
    es: {
        L: function (date) { return exports.transformDate({ date: date, lang: 'es', type: 'L' }); },
        l: function (date) { return exports.transformDate({ date: date, lang: 'es', type: 'l' }); },
        ll: function (date) { return exports.transformDate({ date: date, lang: 'es', type: 'll' }); },
    },
    de: {
        L: function (date) { return exports.transformDate({ date: date, lang: 'de', type: 'L' }); },
        l: function (date) { return exports.transformDate({ date: date, lang: 'de', type: 'l' }); },
        ll: function (date) { return exports.transformDate({ date: date, lang: 'de', type: 'll' }); },
    },
};
