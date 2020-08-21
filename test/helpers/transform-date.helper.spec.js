import {
	completeWith0,
	transformDate,
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
		describe('[lang = en] - [type = L]', () => {
			const lang = 'en';
			const type = 'L';

			it('should transform date with a format like MM/DD/YYYY', () => {
				const date = '2020/10/31';

				const result = transformDate({ date, lang, type });
				expect(result).toEqual('10/31/2020');
			});
		});
	});
});
