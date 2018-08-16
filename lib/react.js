const path = require('path');

const base = path.resolve(__dirname, 'base.js');
const browser = path.resolve(__dirname, 'browser.js');

module.exports = {
	env: {
		node: true
	},
	extends: ['plugin:react/recommended', 'prettier/react', base, browser],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['jsx-a11y']
};
