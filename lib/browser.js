const path = require('path');

const base = path.resolve(__dirname, 'base.js');

module.exports = {
	env: {
		browser: true,
		es6: true,
		serviceworker: true
	},
	extends: ['airbnb', base],
	parser: 'babel-eslint',
	rules: {
		'import/no-commonjs': 'error',
		'import/extensions': ['error', 'always', { ignorePackages: true }],
		'import/no-useless-path-segments': 'warn',
		'import/order': 'warn'
	}
};
