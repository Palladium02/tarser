import {Parser} from './parser';
import {Err, Ok} from './state';

export const many1 = <T, U>(p: Parser<T, U>) =>
  new Parser<T, [U, ...U[]]>(state => {
    if (state.type === 'err') return state;

    const results = [];
    let {index} = state;

    while (true) {
      const result = p.transformer(Ok(index, null, state.input));

      if (result.type === 'err') break;

      index = result.index;
      results.push(result.value);
    }

    if (results.length === 0) return Err(index, 'no matches', state.input);

    return Ok(index, results as [U, ...U[]], state.input);
  });
