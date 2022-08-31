import { clearString, getAriaText, GetAriaTextParams } from '../../src/helpers/text.helper';

describe('clearString helper', () => {
	test('should clear string', () => {
		const result = clearString('lorem-ipsum_dolor');
		expect(result).toBe('lorem ipsum dolor');
	});
});

describe('getAriaText helper', () => {
	describe('should return a accessibility format date string', () => {
		test('language: en', () => {
			const config: GetAriaTextParams = {
				from: '2020/12/01',
				to: '2020/12/02',
				lang: 'en',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('From 2020/12/01 To 2020/12/02');
		});

		test('language: es', () => {
			const config: GetAriaTextParams = {
				from: '2020/12/01',
				to: '2020/12/02',
				lang: 'es',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('Desde 2020/12/01 Hasta 2020/12/02');
		});

		test('language: de', () => {
			const config: GetAriaTextParams = {
				from: '2020/12/01',
				to: '2020/12/02',
				lang: 'de',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('Von 2020/12/01 Bis 2020/12/02');
		});

		test('language: tr', () => {
			const config: GetAriaTextParams = {
				from: '2020/12/01',
				to: '2020/12/02',
				lang: 'tr',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('Başlangıç 2020/12/01 Bitiş 2020/12/02');
		});

		test('language: zh', () => {
			const config: GetAriaTextParams = {
				from: '2020/12/01',
				to: '2020/12/02',
				lang: 'zh',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('从 2020/12/01 到 2020/12/02');
		});
	});
});
