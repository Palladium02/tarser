import {test} from 'node:test';
import assert from 'node:assert';
import {char, choice} from '../src';

test('should parse the first parser', () => {
  const parser = choice(char('a'), char('b'));
  const result = parser.run('a');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 1,
    value: 'a',
    input: 'a',
  });
});

test('should parse the second parser', () => {
  const parser = choice(char('a'), char('b'));
  const result = parser.run('b');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 1,
    value: 'b',
    input: 'b',
  });
});

test('should fail if no parsers match', () => {
  const parser = choice(char('a'), char('b'));
  const result = parser.run('c');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 0,
    input: 'c',
    message: 'All parsers failed to match input',
  });
});
