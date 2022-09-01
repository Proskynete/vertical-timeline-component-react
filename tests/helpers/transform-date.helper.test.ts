import {
	getAccessibilityDate,
	GetAccessibilityDateParams,
	ITransformDate,
	transformDate,
} from '../../src/helpers/transform-date.helper';

describe('transformDate helper', () => {
	describe('language: en', () => {
		const lang = 'en';

		test('type: only-number', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('12/2/2020');
		});

		test('type: short', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dec 02, 2020');
		});

		test('type: with-weekday', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Wed, Dec 02, 2020');
		});

		test('type: full', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Wednesday, December 02, 2020');
		});
	});

	describe('language: es', () => {
		const lang = 'es';

		test('type: only-number', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2/12/2020');
		});

		test('type: short', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 dic 2020');
		});

		test('type: with-weekday', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('mié, 02 dic 2020');
		});

		test('type: full', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('miércoles, 02 de diciembre de 2020');
		});
	});

	describe('language: de', () => {
		const lang = 'de';

		test('type: only-number', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2.12.2020');
		});

		test('type: short', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02. Dez. 2020');
		});

		test('type: with-weekday', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Mi., 02. Dez. 2020');
		});

		test('type: full', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Mittwoch, 02. Dezember 2020');
		});
	});

	describe('language: tr', () => {
		const lang = 'tr';

		test('type: only-number', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02.12.2020');
		});

		test('type: short', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 Ara 2020');
		});

		test('type: with-weekday', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 Ara 2020 Çar');
		});

		test('type: full', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 Aralık 2020 Çarşamba');
		});
	});

	describe('language: zh', () => {
		const lang = 'zh';

		test('type: only-number', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020/12/2');
		});

		test('type: short', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月02日');
		});

		test('type: with-weekday', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月02日周三');
		});

		test('type: full', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月02日星期三');
		});
	});
});

describe('getAccessibilityDate helper', () => {
	test('language: en', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'en',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('12/2/2020');
	});

	test('language: es', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'es',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2/12/2020');
	});

	test('language: de', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'de',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2.12.2020');
	});

	test('language: tr', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'tr',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('02.12.2020');
	});

	test('language: zh', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'zh',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2020/12/2');
	});
});
