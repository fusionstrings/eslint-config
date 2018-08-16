const path = require('path');

module.exports = {
	env: {
		commonjs: true,
		node: true
	},
	extends: [path.resolve(__dirname, 'base.js')]
};
