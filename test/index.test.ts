import {test} from 'node:test';
import assert from 'node:assert';
import {char, choice, many1, optional, sequence} from '../src';

test('should parse numbers in scientific notation', () => {
  const digit = choice(
    char('0'),
    char('1'),
    char('2'),
    char('3'),
    char('4'),
    char('5'),
    char('6'),
    char('7'),
    char('8'),
    char('9')
  );

  const float = sequence(
    optional(char('-')),
    many1(digit),
    optional(sequence(char('.'), many1(digit)))
  );

  const int = sequence(optional(char('-')), many1(digit));

  const scientific = sequence(float, char('e'), int);

  const result = scientific.run('123.456e-789');

  // console.log(JSON.stringify(result, null, 2));

  assert.deepStrictEqual(result, {
    type: 'ok',
    index: 12,
    value: [
      [null, ['1', '2', '3'], ['.', ['4', '5', '6']]],
      'e',
      ['-', ['7', '8', '9']],
    ],
    input: '123.456e-789',
  });
});
