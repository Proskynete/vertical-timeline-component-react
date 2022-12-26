"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapText = exports.defaultValues = void 0;
exports.defaultValues = {
    theme: {
        yearColor: '#888888',
        lineColor: '#c5c5c5',
        dotColor: '#c5c5c5',
        borderDotColor: '#ffffff',
        titleColor: '#cccccc',
        subtitleColor: '#888888',
        eventColor: '#cccccc',
        descriptionColor: '#cccccc',
    },
    lang: 'en',
    dateFormat: 'only-number',
    collapse: false,
    descriptionSymbol: '•',
    withoutDay: false,
};
exports.mapText = {
    en: { from: 'From', to: 'To' },
    es: { from: 'Desde', to: 'Hasta' },
    de: { from: 'Von', to: 'Bis' },
    tr: { from: 'Başlangıç', to: 'Bitiş' },
    zh: { from: '从', to: '到' },
};
