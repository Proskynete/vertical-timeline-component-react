import { monthArray } from '../config/index';
export var completeWith0 = function (n) {
    return n.toLocaleString().length < 2 ? "0" + n : n;
};
export var transformDate = function (_a) {
    var date = _a.date, lang = _a.lang, type = _a.type;
    var year = parseInt(date.split('/')[0], 10);
    var month = parseInt(date.split('/')[1], 10);
    var day = parseInt(date.split('/')[2], 10);
    switch (type) {
        case 'L':
            if (lang === 'en') {
                return "" + (month ? completeWith0(month) + "/" : '') + (day ? completeWith0(day) + "/" : '') + year;
            }
            else if (lang === 'es') {
                return "" + (day ? completeWith0(day) + "/" : '') + (month ? completeWith0(month) + "/" : '') + year;
            }
            else {
                return "" + (day && month
                    ? completeWith0(day) + "." + completeWith0(month) + "." + year
                    : "" + (month ? completeWith0(month) + "/" : '') + year);
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
                return "" + (month ? "" + monthArray[lang][month - 1] : '') + (day ? " " + completeWith0(day) : '') + (day || month ? ', ' : '') + year;
            }
            else if (lang === 'es') {
                return "" + (day ? day + " de " : '') + (month ? monthArray[lang][month - 1] + ", " : '') + year;
            }
            else {
                return "" + (day ? day + ". " : '') + (month ? monthArray[lang][month - 1] + " " : '') + year;
            }
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
};
