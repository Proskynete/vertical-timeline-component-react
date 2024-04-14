import {
	getAccessibilityDate,
	GetAccessibilityDateParams,
	ITransformDate,
	transformDate,
} from '../../src/helpers/transform-date.helper';

describe('transformDate helper', () => {
	describe('language: en', () => {
		const lang = 'en';

		test('type: only-number, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('12/2/2020');
		});

		test('type: only-number, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('12/2020');
		});

		test('type: short, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dec 02, 2020');
		});

		test('type: short, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dec 2020');
		});

		test('type: with-weekday, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Wed, Dec 02, 2020');
		});

		test('type: with-weekday, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dec 2020 Wed');
		});

		test('type: full, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Wednesday, December 02, 2020');
		});

		test('type: full, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('December 2020 Wednesday');
		});
	});

	describe('language: es', () => {
		const lang = 'es';

		test('type: only-number,withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2/12/2020');
		});

		test('type: only-number, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('12/2020');
		});

		test('type: short, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 dic 2020');
		});

		test('type: short, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('dic 2020');
		});

		test('type: with-weekday, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('mié, 02 dic 2020');
		});

		test('type: with-weekday, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('dic 2020 mié');
		});

		test('type: full, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('miércoles, 02 de diciembre de 2020');
		});

		test('type: full, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('diciembre de 2020 miércoles');
		});
	});

	describe('language: de', () => {
		const lang = 'de';

		test('type: only-number, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2.12.2020');
		});

		test('type: only-number, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('12/2020');
		});

		test('type: short, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02. Dez. 2020');
		});

		test('type: short, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dez. 2020');
		});

		test('type: with-weekday, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Mi., 02. Dez. 2020');
		});

		test('type: with-weekday, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dez. 2020 Mi');
		});

		test('type: full, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Mittwoch, 02. Dezember 2020');
		});

		test('type: full, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Dezember 2020 Mittwoch');
		});
	});

	describe('language: tr', () => {
		const lang = 'tr';

		test('type: only-number, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02.12.2020');
		});

		test('type: only-number, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('12/2020');
		});

		test('type: short, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 Ara 2020');
		});

		test('type: short, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Ara 2020');
		});

		test('type: with-weekday, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 Ara 2020 Çar');
		});

		test('type: with-weekday, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Ara 2020 Çar');
		});

		test('type: full, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('02 Aralık 2020 Çarşamba');
		});

		test('type: full, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('Aralık 2020 Çarşamba');
		});
	});

	describe('language: zh', () => {
		const lang = 'zh';

		test('type: only-number, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020/12/2');
		});

		test('type: only-number, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'only-number',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月');
		});

		test('type: short, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月02日');
		});

		test('type: short, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'short',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月');
		});

		test('type: with-weekday, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月02日周三');
		});

		test('type: with-weekday, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'with-weekday',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月 周三');
		});

		test('type: full, withoutDay: false', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月02日星期三');
		});

		test('type: full, withoutDay: true', () => {
			const config: ITransformDate = {
				date: '2020/12/02',
				type: 'full',
				withoutDay: true,
				lang,
			};

			const result = transformDate(config);
			expect(result).toBe('2020年12月 星期三');
		});
	});
});

describe('getAccessibilityDate helper', () => {
	test('language: en, withoutDay: false', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'en',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('12/2/2020');
	});

	test('language: en, withoutDay: true', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'en',
			date: '2020/12/02',
			withoutDay: true,
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('12/2020');
	});

	test('language: es, withoutDay: false', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'es',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2/12/2020');
	});

	test('language: es, withoutDay: true', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'es',
			date: '2020/12/02',
			withoutDay: true,
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('12/2020');
	});

	test('language: de, withoutDay: false', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'de',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2.12.2020');
	});

	test('language: de, withoutDay: true', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'de',
			date: '2020/12/02',
			withoutDay: true,
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('12/2020');
	});

	test('language: tr, withoutDay: false', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'tr',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('02.12.2020');
	});

	test('language: tr, withoutDay: true', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'tr',
			date: '2020/12/02',
			withoutDay: true,
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('12/2020');
	});

	test('language: zh, withoutDay: false', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'zh',
			date: '2020/12/02',
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2020/12/2');
	});

	test('language: zh, withoutDay: true', () => {
		const config: GetAccessibilityDateParams = {
			lang: 'zh',
			date: '2020/12/02',
			withoutDay: true,
		};

		const result = getAccessibilityDate(config);
		expect(result).toBe('2020年12月');
	});
});
