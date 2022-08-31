import { getAccessibilityDate, transformDate, } from '../../src/helpers/transform-date.helper';
describe('transformDate helper', function () {
    describe('language: en', function () {
        var lang = 'en';
        test('type: only-number', function () {
            var config = {
                date: '2020/12/02',
                type: 'only-number',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('12/2/2020');
        });
        test('type: short', function () {
            var config = {
                date: '2020/12/02',
                type: 'short',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('Dec 02, 2020');
        });
        test('type: with-weekday', function () {
            var config = {
                date: '2020/12/02',
                type: 'with-weekday',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('Wed, Dec 02, 2020');
        });
        test('type: full', function () {
            var config = {
                date: '2020/12/02',
                type: 'full',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('Wednesday, December 02, 2020');
        });
    });
    describe('language: es', function () {
        var lang = 'es';
        test('type: only-number', function () {
            var config = {
                date: '2020/12/02',
                type: 'only-number',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('2/12/2020');
        });
        test('type: short', function () {
            var config = {
                date: '2020/12/02',
                type: 'short',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('02 dic 2020');
        });
        test('type: with-weekday', function () {
            var config = {
                date: '2020/12/02',
                type: 'with-weekday',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('mié, 02 dic 2020');
        });
        test('type: full', function () {
            var config = {
                date: '2020/12/02',
                type: 'full',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('miércoles, 02 de diciembre de 2020');
        });
    });
    describe('language: de', function () {
        var lang = 'de';
        test('type: only-number', function () {
            var config = {
                date: '2020/12/02',
                type: 'only-number',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('2.12.2020');
        });
        test('type: short', function () {
            var config = {
                date: '2020/12/02',
                type: 'short',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('02. Dez. 2020');
        });
        test('type: with-weekday', function () {
            var config = {
                date: '2020/12/02',
                type: 'with-weekday',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('Mi., 02. Dez. 2020');
        });
        test('type: full', function () {
            var config = {
                date: '2020/12/02',
                type: 'full',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('Mittwoch, 02. Dezember 2020');
        });
    });
    describe('language: tr', function () {
        var lang = 'tr';
        test('type: only-number', function () {
            var config = {
                date: '2020/12/02',
                type: 'only-number',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('02.12.2020');
        });
        test('type: short', function () {
            var config = {
                date: '2020/12/02',
                type: 'short',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('02 Ara 2020');
        });
        test('type: with-weekday', function () {
            var config = {
                date: '2020/12/02',
                type: 'with-weekday',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('02 Ara 2020 Çar');
        });
        test('type: full', function () {
            var config = {
                date: '2020/12/02',
                type: 'full',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('02 Aralık 2020 Çarşamba');
        });
    });
    describe('language: zh', function () {
        var lang = 'zh';
        test('type: only-number', function () {
            var config = {
                date: '2020/12/02',
                type: 'only-number',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('2020/12/2');
        });
        test('type: short', function () {
            var config = {
                date: '2020/12/02',
                type: 'short',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('2020年12月02日');
        });
        test('type: with-weekday', function () {
            var config = {
                date: '2020/12/02',
                type: 'with-weekday',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('2020年12月02日周三');
        });
        test('type: full', function () {
            var config = {
                date: '2020/12/02',
                type: 'full',
                lang: lang,
            };
            var result = transformDate(config);
            expect(result).toBe('2020年12月02日星期三');
        });
    });
});
describe('getAccessibilityDate helper', function () {
    test('language: en', function () {
        var config = {
            lang: 'en',
            date: '2020/12/02',
        };
        var result = getAccessibilityDate(config);
        expect(result).toBe('12/2/2020');
    });
    test('language: es', function () {
        var config = {
            lang: 'es',
            date: '2020/12/02',
        };
        var result = getAccessibilityDate(config);
        expect(result).toBe('2/12/2020');
    });
    test('language: de', function () {
        var config = {
            lang: 'de',
            date: '2020/12/02',
        };
        var result = getAccessibilityDate(config);
        expect(result).toBe('2.12.2020');
    });
    test('language: tr', function () {
        var config = {
            lang: 'tr',
            date: '2020/12/02',
        };
        var result = getAccessibilityDate(config);
        expect(result).toBe('02.12.2020');
    });
    test('language: zh', function () {
        var config = {
            lang: 'zh',
            date: '2020/12/02',
        };
        var result = getAccessibilityDate(config);
        expect(result).toBe('2020/12/2');
    });
});
