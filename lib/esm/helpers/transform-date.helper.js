/* eslint-disable default-case */
/* eslint-disable consistent-return */
import { monthArray } from '../config/index';
export var completeWith0 = function (n) {
    return n.toLocaleString().length < 2 ? "0".concat(n) : n;
};
export var transformDate = function (_a) {
    var date = _a.date, lang = _a.lang, type = _a.type;
    var year = parseInt(date.split('/')[0], 10);
    var month = parseInt(date.split('/')[1], 10);
    var day = parseInt(date.split('/')[2], 10);
    switch (type) {
        case 'L':
            return lang === 'en'
                ? "".concat(month ? "".concat(completeWith0(month), "/") : '').concat(day ? "".concat(completeWith0(day), "/") : '').concat(year)
                : lang === 'es'
                    ? "".concat(day ? "".concat(completeWith0(day), "/") : '').concat(month ? "".concat(completeWith0(month), "/") : '').concat(year)
                    : lang === 'de'
                        ? "".concat(day && month
                            ? "".concat(completeWith0(day), ".").concat(completeWith0(month), ".").concat(year)
                            : "".concat(month ? "".concat(completeWith0(month), "/") : '').concat(year))
                        : /* lang === 'zh_CN' */
                            "".concat(year, " \u5E74").concat(month ? " ".concat(completeWith0(month), " \u6708") : '').concat(day ? " ".concat(completeWith0(day), " \u65E5") : '');
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
                ? "".concat(month ? "".concat(monthArray[lang][month - 1]) : '').concat(day ? " ".concat(completeWith0(day)) : '').concat(day || month ? ', ' : '').concat(year)
                : lang === 'es'
                    ? "".concat(day ? "".concat(day, " de ") : '').concat(month ? "".concat(monthArray[lang][month - 1], ", ") : '').concat(year)
                    : lang === 'de'
                        ? "".concat(day ? "".concat(day, ". ") : '').concat(month ? "".concat(monthArray[lang][month - 1], " ") : '').concat(year)
                        : /* lang === 'zh_CN' */
                            "".concat(year, " \u5E74").concat(month ? "".concat(monthArray[lang][month - 1]) : '').concat(day ? " ".concat(day, " \u65E5") : '');
    }
};
export var mapDate = {
    en: {
        L: function (date) { return transformDate({ date: date, lang: 'en', type: 'L' }); },
        l: function (date) { return transformDate({ date: date, lang: 'en', type: 'l' }); },
        ll: function (date) { return transformDate({ date: date, lang: 'en', type: 'll' }); },
    },
    es: {
        L: function (date) { return transformDate({ date: date, lang: 'es', type: 'L' }); },
        l: function (date) { return transformDate({ date: date, lang: 'es', type: 'l' }); },
        ll: function (date) { return transformDate({ date: date, lang: 'es', type: 'll' }); },
    },
    de: {
        L: function (date) { return transformDate({ date: date, lang: 'de', type: 'L' }); },
        l: function (date) { return transformDate({ date: date, lang: 'de', type: 'l' }); },
        ll: function (date) { return transformDate({ date: date, lang: 'de', type: 'll' }); },
    },
    zh_CN: {
        L: function (date) { return transformDate({ date: date, lang: 'zh_CN', type: 'L' }); },
        l: function (date) { return transformDate({ date: date, lang: 'zh_CN', type: 'l' }); },
        ll: function (date) { return transformDate({ date: date, lang: 'zh_CN', type: 'll' }); },
    },
};
