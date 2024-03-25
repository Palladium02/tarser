import {char} from './char';
import {choice} from './choice';
import {many1} from './many1';
import {optional} from './optional';
import {Parser} from './parser';
import {sequence} from './sequence';
import {Err, Ok} from './state';

export const whitespace = new Parser<unknown, string>(state => {
  if (state.type === 'err') return state;

  const {index, input} = state;
  const toInspect = input[index];

  if (!toInspect) return Err(index, 'Expected whitespace but got EOF', input);

  return /\s/.test(toInspect)
    ? Ok(index + 1, toInspect, input)
    : Err(index, `Expected whitespace but got ${toInspect}`, input);
});

export const letter = new Parser<unknown, string>(state => {
  if (state.type === 'err') return state;

  const {index, input} = state;
  const toInspect = input[index];

  if (!toInspect) return Err(index, 'Expected letter but got EOF', input);

  return /[a-zA-Z]/.test(toInspect)
    ? Ok(index + 1, toInspect, input)
    : Err(index, `Expected letter but got ${toInspect}`, input);
});

export const digit = choice(
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

const digitToNumber = (digit: string) => Number(digit);

export const float = sequence(
  optional(char('-')),
  many1(digit),
  optional(sequence(char('.'), many1(digit)))
);

const floatToNumber = (
  parts: [
    string | null,
    [string, ...string[]],
    [string, [string, ...string[]]] | null,
  ]
) => {
  if (!parts) throw new Error('This should not have happened');
  const [sign, integer, decimal] = parts;
  const integerPart = integer.join('');
  const decimalPart = decimal ? decimal[1].join('') : '';
  const number = Number(`${sign ?? ''}${integerPart}.${decimalPart}`);
  return number;
};

export const Converter = {
  forFloat: floatToNumber,
  forDigit: digitToNumber,
};
