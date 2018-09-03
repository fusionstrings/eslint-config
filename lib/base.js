module.exports = {
	env: {
		worker: true,
		jest: true
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'prettier/standard'
	],
	rules: {
		'no-underscore-dangle': ['error', { allowAfterThis: true }],
		'prettier/prettier': ['error', {useTabs: true, singleQuote: true, tabWidth: 4}]
	}
};
