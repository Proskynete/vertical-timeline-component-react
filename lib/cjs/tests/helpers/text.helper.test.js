"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_helper_1 = require("../../src/helpers/text.helper");
describe('clearString helper', function () {
    it('should clear string', function () {
        var result = (0, text_helper_1.clearString)('lorem-ipsum_dolor');
        expect(result).toBe('lorem ipsum dolor');
    });
});
describe('getAriaText helper', function () {
    describe('should return a accessibility format date string', function () {
        it('language: en', function () {
            var config = {
                from: '2019-01-01',
                to: '2019-01-02',
                lang: 'en',
                today: false,
            };
            var result = (0, text_helper_1.getAriaText)(config);
            expect(result).toBe('From 2019-01-01 To 2019-01-02');
        });
        it('language: es', function () {
            var config = {
                from: '2019-01-01',
                to: '2019-01-02',
                lang: 'es',
                today: false,
            };
            var result = (0, text_helper_1.getAriaText)(config);
            expect(result).toBe('Desde 2019-01-01 Hasta 2019-01-02');
        });
        it('language: de', function () {
            var config = {
                from: '2019-01-01',
                to: '2019-01-02',
                lang: 'de',
                today: false,
            };
            var result = (0, text_helper_1.getAriaText)(config);
            expect(result).toBe('Von 2019-01-01 Bis 2019-01-02');
        });
        it('language: tr', function () {
            var config = {
                from: '2019-01-01',
                to: '2019-01-02',
                lang: 'tr',
                today: false,
            };
            var result = (0, text_helper_1.getAriaText)(config);
            expect(result).toBe('Başlangıç 2019-01-01 Bitiş 2019-01-02');
        });
        it('language: zh', function () {
            var config = {
                from: '2019-01-01',
                to: '2019-01-02',
                lang: 'zh',
                today: false,
            };
            var result = (0, text_helper_1.getAriaText)(config);
            expect(result).toBe('从 2019-01-01 到 2019-01-02');
        });
    });
});
