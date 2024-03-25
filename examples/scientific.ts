import {choice, char, sequence, many1, optional} from '../src';

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

const _result = scientific.run('123.456e-789');
