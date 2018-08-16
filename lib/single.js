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
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: ['jsx-a11y'],
	rules: {
		'func-style': 'off',
		'import/no-commonjs': 'error'
	}
};
