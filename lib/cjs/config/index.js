"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapText = exports.defaultValues = void 0;
exports.defaultValues = {
    collapse: false,
    dateFormat: 'only-number',
    descriptionSymbol: '•',
    lang: 'en',
    theme: {
        borderDotColor: '#ffffff',
        descriptionColor: '#cccccc',
        dotColor: '#c5c5c5',
        eventColor: '#cccccc',
        lineColor: '#c5c5c5',
        subtitleColor: '#c5c5c5',
        titleColor: '#cccccc',
        yearColor: '#888888',
    },
    withoutDay: false,
};
exports.mapText = {
    de: { from: 'Von', to: 'Bis' },
    en: { from: 'From', to: 'To' },
    es: { from: 'Desde', to: 'Hasta' },
    tr: { from: 'Başlangıç', to: 'Bitiş' },
    zh: { from: '从', to: '到' },
};
