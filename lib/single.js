module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		worker: true,
		jest: true,
		serviceworker: true,
		nashorn: true
	},
	extends: [
		'airbnb',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:prettier/recommended',
		'prettier/react',
		'prettier/standard'
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2019,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['jsx-a11y'],
	rules: {
		'no-underscore-dangle': 'off',
		'no-undef': 'warn',
		'no-console': 'warn',
		'no-tabs': 'off',
		indent: 'off',
		'lines-around-directive': 'off',
		'prettier/prettier': [
			'error',
			{ useTabs: true, singleQuote: true, tabWidth: 4 }
		]
	}
};
