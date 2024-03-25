import {Parser} from './parser';
import {Ok, Err} from './state';

export const char = <T>(c: string) => {
  if (c.length !== 1)
    throw new Error('char() must be called with a single character');

  return new Parser<T, string>(state => {
    if (state.type === 'err') return state;

    const {index, input} = state;
    const toInspect = input[index];

    if (!toInspect) return Err(index, `Expected ${c} but got EOF`, input);

    return toInspect === c
      ? Ok(index + 1, c, input)
      : Err(index, `Expected ${c} but got ${toInspect}`, input);
  });
};
