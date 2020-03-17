const test = require('ava');
const { join } = require('path');
const { promises } = require('fs');

const { readFile } = promises;
const { default: a } = require('../dist/index');

test('convert xlsx to json', async (t) => {
	const data = await readFile(join(__dirname, 'test.xlsx'));
	const r = a(data);
	t.deepEqual(r, [[{
		Name: 'alice',
		Sex: 0,
		Age: 18
	}, {
		Name: 'john',
		Sex: 1,
		Age: 22
	}]]);
});
