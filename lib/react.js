const path = require('path');

const browser = path.resolve(__dirname, 'browser.js');

module.exports = {
	env: {
		node: true
	},
	extends: ['plugin:react/recommended', 'prettier/react', browser],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['jsx-a11y', 'react-hooks'],
	rules: {
		'react/jsx-filename-extension': 'off',
		'react/prop-types': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
		'react/destructuring-assignment': 'off',
		'react/button-has-type': 'off',
		'react/jsx-wrap-multilines': 'off',
		'react/no-did-update-set-state': 'off',
		'react/no-multi-comp': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'jsx-a11y/heading-has-content': 'warn',
		'react/no-array-index-key': 'warn',
		'react/forbid-prop-types': 'warn',
		'react/require-default-props': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'jsx-a11y/label-has-for': [
			2,
			{
				components: ['Label'],
				required: {
					every: ['id']
				}
			}
		]
	}
};
