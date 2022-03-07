"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapDate = exports.transformDate = exports.completeWith0 = void 0;
/* eslint-disable default-case */
/* eslint-disable consistent-return */
var index_1 = require("../config/index");
var completeWith0 = function (n) {
    return n.toLocaleString().length < 2 ? "0".concat(n) : n;
};
exports.completeWith0 = completeWith0;
var transformDate = function (_a) {
    var date = _a.date, lang = _a.lang, type = _a.type;
    var year = parseInt(date.split('/')[0], 10);
    var month = parseInt(date.split('/')[1], 10);
    var day = parseInt(date.split('/')[2], 10);
    switch (type) {
        case 'L':
            return lang === 'en'
                ? "".concat(month ? "".concat((0, exports.completeWith0)(month), "/") : '').concat(day ? "".concat((0, exports.completeWith0)(day), "/") : '').concat(year)
                : lang === 'es'
                    ? "".concat(day ? "".concat((0, exports.completeWith0)(day), "/") : '').concat(month ? "".concat((0, exports.completeWith0)(month), "/") : '').concat(year)
                    : lang === 'de'
                        ? "".concat(day && month
                            ? "".concat((0, exports.completeWith0)(day), ".").concat((0, exports.completeWith0)(month), ".").concat(year)
                            : "".concat(month ? "".concat((0, exports.completeWith0)(month), "/") : '').concat(year))
                        : /* lang === 'zh_CN' */
                            "".concat(year, " \u5E74").concat(month ? " ".concat((0, exports.completeWith0)(month), " \u6708") : '').concat(day ? " ".concat((0, exports.completeWith0)(day), " \u65E5") : '');
        case 'l':
            return lang === 'en'
                ? "".concat(month ? "".concat(month, "/") : '').concat(day ? "".concat(day, "/") : '').concat(year)
                : lang === 'es'
                    ? "".concat(day ? "".concat(day, "/") : '').concat(month ? "".concat(month, "/") : '').concat(year)
                    : lang === 'de'
                        ? "".concat(day && month
                            ? "".concat(day, ".").concat(month, ".").concat(year)
                            : "".concat(month ? "".concat(month, "/") : '').concat(year))
                        : /* lang === 'zh_CN' */
                            "".concat(year, " \u5E74").concat(month ? " ".concat(month, " \u6708") : '').concat(day ? " ".concat(day, " \u65E5") : '');
        case 'll':
            return lang === 'en'
                ? "".concat(month ? "".concat(index_1.monthArray[lang][month - 1]) : '').concat(day ? " ".concat((0, exports.completeWith0)(day)) : '').concat(day || month ? ', ' : '').concat(year)
                : lang === 'es'
                    ? "".concat(day ? "".concat(day, " de ") : '').concat(month ? "".concat(index_1.monthArray[lang][month - 1], ", ") : '').concat(year)
                    : lang === 'de'
                        ? "".concat(day ? "".concat(day, ". ") : '').concat(month ? "".concat(index_1.monthArray[lang][month - 1], " ") : '').concat(year)
                        : /* lang === 'zh_CN' */
                            "".concat(year, " \u5E74").concat(month ? "".concat(index_1.monthArray[lang][month - 1]) : '').concat(day ? " ".concat(day, " \u65E5") : '');
    }
};
exports.transformDate = transformDate;
exports.mapDate = {
    en: {
        L: function (date) { return (0, exports.transformDate)({ date: date, lang: 'en', type: 'L' }); },
        l: function (date) { return (0, exports.transformDate)({ date: date, lang: 'en', type: 'l' }); },
        ll: function (date) { return (0, exports.transformDate)({ date: date, lang: 'en', type: 'll' }); },
    },
    es: {
        L: function (date) { return (0, exports.transformDate)({ date: date, lang: 'es', type: 'L' }); },
        l: function (date) { return (0, exports.transformDate)({ date: date, lang: 'es', type: 'l' }); },
        ll: function (date) { return (0, exports.transformDate)({ date: date, lang: 'es', type: 'll' }); },
    },
    de: {
        L: function (date) { return (0, exports.transformDate)({ date: date, lang: 'de', type: 'L' }); },
        l: function (date) { return (0, exports.transformDate)({ date: date, lang: 'de', type: 'l' }); },
        ll: function (date) { return (0, exports.transformDate)({ date: date, lang: 'de', type: 'll' }); },
    },
    zh_CN: {
        L: function (date) { return (0, exports.transformDate)({ date: date, lang: 'zh_CN', type: 'L' }); },
        l: function (date) { return (0, exports.transformDate)({ date: date, lang: 'zh_CN', type: 'l' }); },
        ll: function (date) { return (0, exports.transformDate)({ date: date, lang: 'zh_CN', type: 'll' }); },
    },
};
