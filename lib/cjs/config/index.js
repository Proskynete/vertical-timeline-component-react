"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapText = exports.defaultValues = void 0;
exports.defaultValues = {
    theme: {
        yearColor: '#888',
        lineColor: '#c5c5c5',
        dotColor: '#c5c5c5',
        borderDotColor: '#fff',
        titleColor: '#ccc',
        subtitleColor: '#888',
        textColor: '#ccc',
    },
    lang: 'en',
    dateFormat: 'only-number',
    collapse: false,
};
exports.mapText = {
    en: { from: 'From', to: 'To' },
    es: { from: 'Desde', to: 'Hasta' },
    de: { from: 'Von', to: 'Bis' },
    tr: { from: 'Başlangıç', to: 'Bitiş' },
    zh: { from: '从', to: '到' },
};
