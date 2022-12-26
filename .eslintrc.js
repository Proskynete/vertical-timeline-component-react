module.exports = {
	root: true,
	env: {
		es2020: true,
		node: true,
		jest: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:jest/recommended',
		'plugin:testing-library/dom',
	],
	ignorePatterns: ['./lib'],
	plugins: ['@typescript-eslint', 'jest', 'testing-library'],
	parser: '@typescript-eslint/parser',
	rules: {
		'no-console': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'no-underscore-dangle': 0,
		'@typescript-eslint/naming-convention': 0,
		'jest/expect-expect': 0,
	},
};
