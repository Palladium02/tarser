import {test} from 'node:test';
import assert from 'node:assert';
import {char} from '../src';

test('should parse a single character', () => {
  const parser = char('a');
  const result = parser.run('a');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 1,
    value: 'a',
    input: 'a',
  });
});

test('should fail if the character is not present', () => {
  const parser = char('a');
  const result = parser.run('b');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 0,
    message: 'Expected a but got b',
    input: 'b',
  });
});

test('should fail if the input is empty', () => {
  const parser = char('a');
  const result = parser.run('');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 0,
    message: 'Expected a but got EOF',
    input: '',
  });
});
