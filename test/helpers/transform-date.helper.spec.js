import {
	completeWith0,
	transformDate,
	mapDate,
} from '../../src/helpers/transform-date.helper';

describe('Helpers', () => {
	describe('completeWith0 function', () => {
		it('should return the same number', () => {
			const number = 13;

			const result = completeWith0(number);
			expect(result).toEqual(13);
		});

		it('should return the number with a zero added to the start', () => {
			const number = 3;

			const result = completeWith0(number);
			expect(result).toEqual('03');
		});
	});

	describe('transformDate function', () => {
		describe('[lang = en]', () => {
			const lang = 'en';

			describe('[type = L]', () => {
				const type = 'L';

				it('should transform date with a format like MM/DD/YYYY', () => {
					const date = '2020/10/31';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('10/31/2020');
				});

				it('should transform date with a format like MM/YYYY', () => {
					const date = '2020/10';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('10/2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});

			describe('[type = l]', () => {
				const type = 'l';

				it('should transform date with a format like M/D/YYYY', () => {
					const dateOne = '2020/09/09';
					const dateTwo = '2020/12/31';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('9/9/2020');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('12/31/2020');
				});

				it('should transform date with a format like M/YYYY', () => {
					const dateOne = '2020/09';
					const dateTwo = '2020/12';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('9/2020');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('12/2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});

			describe('[type = ll]', () => {
				const type = 'll';

				it('should transform date with a format like MMM DD, YYYY', () => {
					const date = '2020/08/20';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('Aug 20, 2020');
				});

				it('should transform date with a format like MMM, YYYY', () => {
					const date = '2020/08';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('Aug, 2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});
		});

		describe('[lang = es]', () => {
			const lang = 'es';

			describe('[type = L]', () => {
				const type = 'L';

				it('should transform date with a format like DD/MM/YYYY', () => {
					const date = '2020/10/31';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('31/10/2020');
				});

				it('should transform date with a format like MM/YYYY', () => {
					const date = '2020/10';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('10/2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});

			describe('[type = l]', () => {
				const type = 'l';

				it('should transform date with a format like D/M/YYYY', () => {
					const dateOne = '2020/09/09';
					const dateTwo = '2020/12/31';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('9/9/2020');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('31/12/2020');
				});

				it('should transform date with a format like M/YYYY', () => {
					const dateOne = '2020/09';
					const dateTwo = '2020/12';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('9/2020');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('12/2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});

			describe('[type = ll]', () => {
				const type = 'll';

				it('should transform date with a format like DD de MMM, YYYY', () => {
					const date = '2020/08/20';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('20 de Ago, 2020');
				});

				it('should transform date with a format like MMM, YYYY', () => {
					const date = '2020/08';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('Ago, 2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});
		});

		describe('[lang = de]', () => {
			const lang = 'de';

			describe('[type = L]', () => {
				const type = 'L';

				it('should transform date with a format like DD.MM.YYYY', () => {
					const date = '2020/10/31';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('31.10.2020');
				});

				it('should transform date with a format like MM/YYYY', () => {
					const date = '2020/10';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('10/2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});

			describe('[type = l]', () => {
				const type = 'l';

				it('should transform date with a format like D.M.YYYY', () => {
					const dateOne = '2020/09/09';
					const dateTwo = '2020/12/31';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('9.9.2020');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('31.12.2020');
				});

				it('should transform date with a format like M/YYYY', () => {
					const dateOne = '2020/09';
					const dateTwo = '2020/12';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('9/2020');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('12/2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});

			describe('[type = ll]', () => {
				const type = 'll';

				it('should transform date with a format like DD. MMM. YYYY', () => {
					const date = '2020/08/20';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('20. Aug. 2020');
				});

				it('should transform date with a format like MMM. YYYY', () => {
					const date = '2020/08';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('Aug. 2020');
				});

				it('should transform date with a format like YYYY', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020');
				});
			});
		});

		describe('[lang = zh_CN]', () => {
			const lang = 'zh_CN';

			describe('[type = L]', () => {
				const type = 'L';

				it('should transform date with a format like YYYY 年 MM 月 DD 日', () => {
					const date = '2020/10/31';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年 10 月 31 日');
				});

				it('should transform date with a format like YYYY 年 MM 月', () => {
					const date = '2020/10';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年 10 月');
				});

				it('should transform date with a format like YYYY 年', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年');
				});
			});

			describe('[type = l]', () => {
				const type = 'l';

				it('should transform date with a format like YYYY 年 M 月 D 日', () => {
					const dateOne = '2020/09/09';
					const dateTwo = '2020/12/31';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('2020 年 9 月 9 日');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('2020 年 12 月 31 日');
				});

				it('should transform date with a format like YYYY 年 M 月', () => {
					const dateOne = '2020/09';
					const dateTwo = '2020/12';

					const result = transformDate({ date: dateOne, lang, type });
					expect(result).toEqual('2020 年 9 月');

					const resultTwo = transformDate({ date: dateTwo, lang, type });
					expect(resultTwo).toEqual('2020 年 12 月');
				});

				it('should transform date with a format like YYYY 年', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年');
				});
			});

			describe('[type = ll]', () => {
				const type = 'll';

				it('should transform date with a format like YYYY 年 MMM DD 日', () => {
					const date = '2020/08/20';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年八月 20 日');
				});

				it('should transform date with a format like YYYY 年 MMM', () => {
					const date = '2020/08';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年八月');
				});

				it('should transform date with a format like YYYY 年', () => {
					const date = '2020';

					const result = transformDate({ date, lang, type });
					expect(result).toEqual('2020 年');
				});
			});
		});
	});

	describe('mapDate hashmap', () => {
		it('LANG=en - TYPE=L', () => {
			const lang = 'en';
			const type = 'L';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('08/21/2020');
		});

		it('LANG=en - TYPE=l', () => {
			const lang = 'en';
			const type = 'l';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('8/21/2020');
		});

		it('LANG=en - TYPE=ll', () => {
			const lang = 'en';
			const type = 'll';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('Aug 21, 2020');
		});

		it('LANG=es - TYPE=L', () => {
			const lang = 'es';
			const type = 'L';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('21/08/2020');
		});

		it('LANG=es - TYPE=l', () => {
			const lang = 'es';
			const type = 'l';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('21/8/2020');
		});

		it('LANG=es - TYPE=ll', () => {
			const lang = 'es';
			const type = 'll';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('21 de Ago, 2020');
		});

		it('LANG=de - TYPE=L', () => {
			const lang = 'de';
			const type = 'L';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('21.08.2020');
		});

		it('LANG=de - TYPE=l', () => {
			const lang = 'de';
			const type = 'l';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('21.8.2020');
		});

		it('LANG=de - TYPE=ll', () => {
			const lang = 'de';
			const type = 'll';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('21. Aug. 2020');
		});

		it('LANG=zh_CN - TYPE=L', () => {
			const lang = 'zh_CN';
			const type = 'L';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('2020 年 08 月 21 日');
		});

		it('LANG=zh_CN - TYPE=l', () => {
			const lang = 'zh_CN';
			const type = 'l';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('2020 年 8 月 21 日');
		});

		it('LANG=zh_CN - TYPE=ll', () => {
			const lang = 'zh_CN';
			const type = 'll';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('2020 年八月 21 日');
		});

		it('LANG=zh_CN - TYPE=L', () => {
			const lang = 'zh_CN';
			const type = 'L';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('2020 年 08 月 21 日');
		});

		it('LANG=zh_CN - TYPE=l', () => {
			const lang = 'zh_CN';
			const type = 'l';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('2020 年 8 月 21 日');
		});

		it('LANG=zh_CN - TYPE=ll', () => {
			const lang = 'zh_CN';
			const type = 'll';
			const date = '2020/08/21';

			expect(mapDate[lang][type](date)).toEqual('2020 年八月 21 日');
		});
	});
});
