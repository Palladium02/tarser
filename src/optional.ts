import {Parser} from './parser';
import {Ok} from './state';

export const optional = <T, U>(p: Parser<T, U>) =>
  new Parser<T, U | null>(state => {
    if (state.type === 'err') return state;

    const result = p.transformer(Ok(state.index, null, state.input));

    if (result.type === 'err') return Ok(state.index, null, state.input);

    return result;
  });
