/* eslint-disable import/no-commonjs */
const { CLIEngine } = require('eslint');
const path = require('path');
// const eslintConfig = require('./../index.js');

const cli = new CLIEngine({
	configFile: 'lib/browser.js',
	useEslintrc: false
});

// console.log(cli.executeOnFiles(`${process.cwd()}./fixtures/common-js-import`));

// it('works', () => {
// 	expect(eslintConfig).toHaveProperty('env');
// });

it('load config in eslint to validate all rule syntax is correct', () => {
	const noErrorCount = 0;
	const report = cli.executeOnFiles(['./sample.js']);
	expect(report.errorCount).toEqual(noErrorCount);
});

it('require style imports not allowed', async () => {
	const report = await cli.executeOnFiles([
		path.resolve(
			process.cwd(),
			'fixtures',
			'universal-web',
			'should-fail',
			'common-js-import.js'
		)
	]);
	// const { ruleId, message } = await report.results[0];
	expect(report.errorCount).toEqual(1);
});
// it('should disable func-style rule', () => {
// 	expect(
// 		cli.executeOnFiles('./../common-js-import.js').errorCount
// 	).toBeGreaterThan(0);
// });
