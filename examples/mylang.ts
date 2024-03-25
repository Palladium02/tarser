import {
  char,
  choice,
  letter,
  many,
  many1,
  sequence,
  whitespace,
  word,
} from '../src';

const zero = char('0');
const oneThroughNine = choice(
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

const int = choice(
  zero,
  sequence(
    oneThroughNine,
    many(choice(zero, oneThroughNine)).map(v => v.join(''))
  ).map(v => v.join(''))
).map(v => Number(v));

const linebreak = char('\n');

const STO = sequence(
  word('STO').map(v => v.join('')),
  whitespace.map(_ => null),
  int,
  whitespace.map(_ => null),
  int,
  linebreak.map(_ => null)
)
  .map(v => v.filter(value => value !== null))
  .map(([_, register, address]) => ({instruction: 'sto', register, address})); // STO <register> <address>

const LOAD = sequence(
  word('LOAD').map(v => v.join('')),
  whitespace.map(_ => null),
  int,
  whitespace.map(_ => null),
  int,
  linebreak.map(_ => null)
)
  .map(v => v.filter(value => value !== null))
  .map(([_, address, register]) => ({instruction: 'load', address, register})); // LOAD <address> <register>

const ADD = sequence(
  word('ADD').map(v => v.join('')),
  whitespace.map(_ => null),
  int,
  whitespace.map(_ => null),
  int,
  whitespace.map(_ => null),
  int,
  linebreak.map(_ => null)
)
  .map(v => v.filter(value => value !== null))
  .map(([_, left, right, into]) => ({instruction: 'add', left, right, into})); // ADD <register> <register> <register>

const BEQZ = sequence(
  word('BEQZ').map(v => v.join('')),
  whitespace.map(_ => null),
  int,
  whitespace.map(_ => null),
  int,
  linebreak.map(_ => null)
)
  .map(v => v.filter(value => value !== null))
  .map(([_, register, to]) => ({instruction: 'beqz', register, to})); // BEQZ <register> <label>

const BNEZ = sequence(
  word('BNEZ').map(v => v.join('')),
  whitespace.map(_ => null),
  int,
  whitespace.map(_ => null),
  int,
  linebreak.map(_ => null)
)
  .map(v => v.filter(value => value !== null))
  .map(([_, register, to]) => ({instruction: 'bnez', register, to})); // BEQZ <register> <label>

const HALT = sequence(
  word('HALT').map(v => v.join('')),
  linebreak.map(_ => null)
).map(_ => ({instruction: 'halt'})); // HALT

const Label = sequence(
  many1(letter).map(v => v.join('')),
  char(':').map(_ => null),
  linebreak.map(_ => null)
)
  .map(v => v.filter(value => value !== null))
  .map(([label]) => ({instruction: 'noop', label}));

const expression = choice(STO, LOAD, ADD, BEQZ, BNEZ, HALT, Label);

const mylang = many(expression);

// Load memory address 0 into register 1, load memory address 1 into register 2, add register 1 and 2 and store the result in memory address 3 finaly store the result at memory address 0
console.log(mylang.run('main:\nLOAD 0 1\nLOAD 1 2\nADD 1 2 3\nSTO 3 0\n'));
