import {Parser} from './parser';
import {Ok} from './state';

export const many = <T, U>(p: Parser<T, U>) =>
  new Parser(state => {
    if (state.type === 'err') return state;

    const results = [];
    let {index} = state;

    while (true) {
      const result = p.transformer(Ok(index, null, state.input));

      if (result.type === 'err') break;

      index = result.index;
      results.push(result.value);
    }

    return Ok<U[]>(index, results as U[], state.input);
  });
