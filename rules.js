// const fs = require('fs');
// const Linter = require('eslint').Linter;
// const linter = new Linter();

// console.log(linter.getRules());

// fs.writeFile('message.json', linter.getRules(), err => {
// 	if (err) throw err;
// 	console.log('The file has been saved!');
// });
/* eslint-disable import/no-commonjs */
const { CLIEngine } = require('eslint');
const fs = require('fs');
// const eslintConfig = require('./../index.js');

const cli = new CLIEngine({
	configFile: 'index.js',
	useEslintrc: false
});
const rules = cli.getRules();

const rulesToJson = JSON.stringify([...rules]);

fs.writeFile(
	'./rules3.json',
	rulesToJson /* JSON.parse(JSON.stringify(rulesToJson, null, 4)) */,
	err => {
		if (err) {
			console.error(err);
			return;
		}
		console.log('File has been created');
	}
);
