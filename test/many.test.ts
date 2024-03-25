import {test} from 'node:test';
import assert from 'node:assert';
import {char, many} from '../src';

test('should parse many characters', () => {
  const parser = many(char('a'));
  const result = parser.run('aaa');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 3,
    value: ['a', 'a', 'a'],
    input: 'aaa',
  });
});

test('should not fail if no match is found', () => {
  const parser = many(char('a'));
  const result = parser.run('');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 0,
    value: [],
    input: '',
  });
});
