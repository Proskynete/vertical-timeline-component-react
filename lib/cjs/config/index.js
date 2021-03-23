"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapText = exports.monthArray = exports.defaultValues = void 0;
exports.defaultValues = {
    theme: {
        yearColor: '#888888',
        lineColor: '#c5c5c5',
        dotColor: '#c5c5c5',
        borderDotColor: '#ffffff',
        titleColor: '#cccccc',
        subtitleColor: '#888888',
        textColor: '#cccccc',
    },
    lang: 'en',
    dateFormat: 'L',
};
exports.monthArray = {
    es: [
        'Ene',
        'Feb',
        'Mar',
        'Abr',
        'May',
        'Jun',
        'Jul',
        'Ago',
        'Sep',
        'Oct',
        'Nov',
        'Dic',
    ],
    en: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    de: [
        'Jan.',
        'Feb.',
        'März',
        'Apr.',
        'Mai.',
        'Juni',
        'Juli',
        'Aug.',
        'Sep.',
        'Okt.',
        'Nov.',
        'Dez.',
    ],
};
exports.mapText = {
    en: {
        from: 'From',
        to: 'To',
    },
    es: {
        from: 'Desde',
        to: 'Hasta',
    },
    de: {
        from: 'Von',
        to: 'Bis',
    },
};