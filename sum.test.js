const sum = require('./sum');

test('2개 숫자의 합', () => {
	expect(sum(1, 2)).toBe(3);
	expect(sum(5, 41)).toBe(46);
});