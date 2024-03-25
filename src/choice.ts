import {Parser} from './parser';
import {Err, Ok} from './state';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const choice = <Ps extends Array<Parser<any, any>>>(...ps: Ps) => {
  if (ps.length === 0) throw new Error('No parsers provided');
  // @ts-expect-error - We know that the return type is correct fix later
  return new Parser<Heads<Ps>, Tails<Ps>>(state => {
    if (state.type === 'err') return state;
    for (const p of ps) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = p.transformer(Ok(state.index, null, state.input));
      if (result.type === 'ok') return result as Tails<Ps>;
    }
    return Err(state.index, 'All parsers failed to match input', state.input);
  });
};

type Heads<Ps> = Ps extends []
  ? never
  : Ps extends [Parser<infer A, infer _B>, ...infer R]
  ? A | Heads<R>
  : never;

type Tails<Ps> = Ps extends []
  ? never
  : Ps extends [Parser<infer _A, infer B>, ...infer R]
  ? B | Tails<R>
  : never;
