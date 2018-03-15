const eslint = require('eslint');
const eslintConfig = require('./../index.js');

it('works', () => {
	expect(eslintConfig).toHaveProperty('env');
});

it('load config in eslint to validate all rule syntax is correct', () => {
	const { CLIEngine } = eslint;

	const cli = new CLIEngine({
		configFile: './index.js',
		useEslintrc: false
	});

	const code =
		'const foo = 1;\nconst bar = function bar() {\n\treturn true;\n};\nbar(foo);\n';
	const noErrorCount = 0;

	expect(cli.executeOnText(code).errorCount).toEqual(noErrorCount);
});
