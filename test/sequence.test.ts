import {test} from 'node:test';
import assert from 'node:assert';
import {char, sequence} from '../src';

test('should parse a sequence of characters', () => {
  const parser = sequence(char('a'), char('b'), char('c'));
  const result = parser.run('abc');

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 3,
    value: ['a', 'b', 'c'],
    input: 'abc',
  });
});

test('should fail if the first character is not present', () => {
  const parser = sequence(char('a'), char('b'), char('c'));
  const result = parser.run('bbc');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 0,
    message: 'Expected a but got b',
    input: 'bbc',
  });
});

test('should fail if the second character is not present', () => {
  const parser = sequence(char('a'), char('b'), char('c'));
  const result = parser.run('aac');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 1,
    message: 'Expected b but got a',
    input: 'aac',
  });
});

test('should fail if the input is empty', () => {
  const parser = sequence(char('a'), char('b'), char('c'));
  const result = parser.run('');

  assert.deepStrictEqual(result, {
    type: 'err',
    index: 0,
    message: 'Expected a but got EOF',
    input: '',
  });
});
