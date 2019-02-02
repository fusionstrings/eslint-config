const path = require('path');

const base = path.resolve(__dirname, 'base.js');
const browser = path.resolve(__dirname, 'browser.js');

module.exports = {
	env: {
		node: true
	},
	extends: [base, browser, 'plugin:react/recommended', 'prettier/react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['jsx-a11y'],
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/prop-types': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/destructuring-assignment': 'off'
	}
};
