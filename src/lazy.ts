import {Parser} from './parser';
import {Ok} from './state';

export const lazy = <T, U>(fn: () => Parser<T, U>) =>
  new Parser<T, U>(state => {
    const parser = fn();
    return parser.transformer(Ok(state.index, null, state.input));
  });
