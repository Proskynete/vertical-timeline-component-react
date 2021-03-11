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
	});
});
