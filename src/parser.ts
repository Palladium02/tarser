import {ParserState} from './state';

export type TransformerFn<T, U> = (state: ParserState<T>) => ParserState<U>;

export function createState<T>(input: string): ParserState<T> {
  return {type: 'ok', index: 0, value: null, input};
}

export class Parser<T, U> {
  public constructor(public transformer: TransformerFn<T, U>) {}

  public run(input: string) {
    const state = createState<T>(input);
    return this.transformer(state);
  }

  public map<V>(fn: (value: U) => V): Parser<T, V> {
    return new Parser<T, V>(state => {
      const nextState = this.transformer(state);
      if (nextState.type === 'ok') {
        return {...nextState, value: fn(nextState.value as U)};
      }
      return nextState;
    });
  }
}
