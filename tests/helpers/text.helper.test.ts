import { clearString, getAriaText, GetAriaTextParams } from '../../src/helpers/text.helper';

describe('clearString helper', () => {
	it('should clear string', () => {
		const result = clearString('lorem-ipsum_dolor');
		expect(result).toBe('lorem ipsum dolor');
	});
});

describe('getAriaText helper', () => {
	describe('should return a accessibility format date string', () => {
		it('language: en', () => {
			const config: GetAriaTextParams = {
				from: '2019-01-01',
				to: '2019-01-02',
				lang: 'en',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('From 2019-01-01 To 2019-01-02');
		});

		it('language: es', () => {
			const config: GetAriaTextParams = {
				from: '2019-01-01',
				to: '2019-01-02',
				lang: 'es',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('Desde 2019-01-01 Hasta 2019-01-02');
		});

		it('language: de', () => {
			const config: GetAriaTextParams = {
				from: '2019-01-01',
				to: '2019-01-02',
				lang: 'de',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('Von 2019-01-01 Bis 2019-01-02');
		});

		it('language: tr', () => {
			const config: GetAriaTextParams = {
				from: '2019-01-01',
				to: '2019-01-02',
				lang: 'tr',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('Başlangıç 2019-01-01 Bitiş 2019-01-02');
		});

		it('language: zh', () => {
			const config: GetAriaTextParams = {
				from: '2019-01-01',
				to: '2019-01-02',
				lang: 'zh',
				today: false,
			};
			const result = getAriaText(config);
			expect(result).toBe('从 2019-01-01 到 2019-01-02');
		});
	});
});
