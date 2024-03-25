import {test} from 'node:test';
import assert from 'node:assert';
import {char, many1} from '../src';

test('should parse many characters', () => {
  const parser = many1(char('a'));
  const result = parser.run('aaa');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 3,
    value: ['a', 'a', 'a'],
    input: 'aaa',
  });
});

test('should fail if no match is found', () => {
  const parser = many1(char('a'));
  const result = parser.run('');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 0,
    input: '',
    message: 'no matches',
  });
});
