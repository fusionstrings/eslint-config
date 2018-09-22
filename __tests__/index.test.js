import path from 'path';
import test from 'ava';
import eslint from 'eslint';
import eslintConfig from './../index.js';

test('works', t => {
	t.truthy(eslintConfig.env);
});

test('load config in eslint to validate all rule syntax is correct', t => {
	const { CLIEngine } = eslint;

	const cli = new CLIEngine({
		configFile: path.resolve(process.cwd(), 'index.js'),
		useEslintrc: false
	});

	const code =
		'const foo = 1;\nconst bar = function bar() {\n\treturn true;\n};\nbar(foo);\n';
	const noErrorCount = 0;

	t.is(cli.executeOnText(code).errorCount, noErrorCount);
});
