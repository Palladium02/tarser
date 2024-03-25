/**
 * Simple JSON parser
 * strings dont support escape characters
 * no infinite nesting of objects or arrays
 * no whitespace allowed
 */
import {
  choice,
  float,
  word,
  Converter,
  sequence,
  char,
  many,
  letter,
  lazy,
} from '../src';
import {Parser} from '../src/parser';

const Null = word('null').map(_ => null);

const bool = choice(
  word('true').map(_ => true),
  word('false').map(_ => false)
);

const number = float.map(Converter.forFloat);

const string = sequence(char('"'), many(letter), char('"')).map(
  ([_open, value, _close]) => value.join('')
);

const object: <T>() => Parser<T, Record<string, unknown>> = () =>
  choice(
    word('{}').map(_ => ({})), // empty object
    sequence(
      char('{'),
      many(sequence(KeyValue(), char(','))),
      KeyValue(),
      char('}')
    ).map(([_l, manyKv, kv, _r]) => {
      const o = manyKv.reduce((acc, [pair, _comma]) => ({...acc, ...pair}), {});
      return {...o, ...kv};
    }) // object with multiple key-value pairs
  );

const KeyValue: <T>() => Parser<T, Record<string, unknown>> = () =>
  sequence(string, char(':'), json).map(([key, _, value]) => ({
    [key]: value,
  }));

const array: () => Parser<string, unknown[]> = () =>
  choice(
    word('[]').map(_ => []), // empty array
    sequence(char('['), many(sequence(json, char(','))), json, char(']')).map(
      ([_l, values, value, _r]) => {
        const arr = values.reduce<unknown[]>(
          (acc, [v, _comma]) => [...acc, v],
          []
        );
        return [...arr, value];
      }
    )
  );

const json = choice(Null, bool, number, string, lazy(object), lazy(array));

console.log(json.run('{"a":1,"b":2}'));
