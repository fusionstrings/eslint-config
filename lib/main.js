const path = require('path');

const react = path.resolve(__dirname, 'react.js');

const node = path.resolve(__dirname, 'node.js');

module.exports = {
	extends: [react, node]
};
