import {test} from 'node:test';
import assert from 'node:assert';
import {Converter, float} from '../src';

test('should parse numbers and convert them to js numbers', () => {
  const parser = float.map(Converter.forFloat);

  assert.deepStrictEqual(parser.run('123.456'), {
    type: 'ok',
    index: 7,
    value: 123.456,
    input: '123.456',
  });
});
