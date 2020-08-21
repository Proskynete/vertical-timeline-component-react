import { completeWith0 } from '../../src/helpers/transform-date.helper';

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
});
