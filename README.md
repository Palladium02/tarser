# Tarser

Tarser is the successor to my "parser-combinator" library.

## Installation

```sh
npm install https://github.com/Palladium02/tarser.git
```

## Documentation

### `char(c: string)`

### `many(p: Parser)`

`many` takes a parser which is then applied to the input. The parser will eat from the input until it can't. It may not eat anything.

### `many1(p: Parser)`

Similar to `many` but `many1` will eat at least once. If that is not possible this and all following parser will fail.

### `sequence(...ps: Parser[])`

`sequence` takes a set of parsers which as the name implies we be working on the input one after another. As soon as one parser fails the whole sequence will fail and yield an error result.

### `word(w: string)`

`word` converts a string into a parser that expects that string.

```ts
import {word} from 'tarser';

const Hello = word('Hello');

Hello.run('Hello World!');
//    ^? { type: 'ok', index: 6, input: 'Hello World!', value: ['H', 'e', 'l, 'l', 'o'] }
```

Here one might already see that `word` is just the combination of `char` and `sequence` as we receive `['H', 'e', 'l, 'l', 'o']` as parsed value.
How we can change the parsed will be explained in the Converter section.

### `optional(p: Parser)`

`optional` takes a parser that might but must not be satisfied by the input. Based on whether the parser was satisfied we advance the index.

### `choice(...ps: Parser[])`

`choice` takes a set of parsers of which one must be satisfied. It will always take the first succeeding parser.

### `float`

A parser that expects the string representation a floating point number.

### `digit`

A parser that expects a singular digit.

### `whitespace`

A parser that expects a whitespace character.

### `lazy`

`lazy` takes a function that returns a parsers and only call the given function if needed allowing you to build recursive parsers. E.g. `examples/array.ts`

### `Converter`

Parser return `ParserState`s containing a value field if the parser succeeded. These values might not have the shape you want. `Parser`s have a `map` method that allows you to convert the value field to a reasonable value.
Tarser ships with a selection of converters for all built-in terminal parsers.

#### `forDigit`

```ts
import * as Tarser from 'tarser';

const digit = Tarser.digit.map(Converter.forDigit);

digit.run('1');
//    ^? { type: 'ok', index: 1, input: '1', value: 1 }
```

#### `forFloat`

```ts
import * as Tarser from 'tarser';

const float = Tarser.float.map(Converter.forFloat);

float.run('-1.2');
//    ^? { type: 'ok', index: 1, input: '1', value: -1.2 }
```

## Examples

Examples can be found in the examples directory of this repo.
