import {
  char,
  choice,
  float,
  many,
  sequence,
  word,
  lazy,
  Converter,
} from '../src';
import {Parser} from '../src/parser';
const array: () => Parser<string, unknown[]> = () =>
  choice(
    word('[]').map(_ => []),
    sequence(
      char('['),
      many(sequence(lazy(Value), char(','))),
      lazy(Value),
      char(']')
    ).map(([_l, values, value, _r]) => {
      const arr = values.reduce<unknown[]>(
        (acc, [v, _comma]) => [...acc, v],
        []
      );
      return [...arr, value];
    })
  );

const Value = () => choice(float.map(Converter.forFloat), lazy(array));

console.log(Value().run('[1,2]'));
