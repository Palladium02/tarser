import {Parser} from './parser';
import {Ok, ParserState} from './state';

export function sequence<A, B>(...ps: [Parser<A, B>]): Parser<A, [B]>;
export function sequence<A, B, C>(
  ...ps: [Parser<A, B>, Parser<B, C>]
): Parser<A, [B, C]>;
export function sequence<A, B, C, D>(
  ...ps: [Parser<A, B>, Parser<B, C>, Parser<C, D>]
): Parser<A, [B, C, D]>;
export function sequence<A, B, C, D, E>(
  ...ps: [Parser<A, B>, Parser<B, C>, Parser<C, D>, Parser<D, E>]
): Parser<A, [B, C, D, E]>;
export function sequence<A, B, C, D, E, F>(
  ...ps: [Parser<A, B>, Parser<B, C>, Parser<C, D>, Parser<D, E>, Parser<E, F>]
): Parser<A, [B, C, D, E, F]>;
export function sequence<A, B, C, D, E, F, G>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
  ]
): Parser<A, [B, C, D, E, F, G]>;
export function sequence<A, B, C, D, E, F, G, H>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
  ]
): Parser<A, [B, C, D, E, F, G, H]>;
export function sequence<A, B, C, D, E, F, G, H, I>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I]>;
export function sequence<A, B, C, D, E, F, G, H, I, J>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
    Parser<P, Q>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q]>;
export function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
    Parser<P, Q>,
    Parser<Q, R>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]>;
export function sequence<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
    Parser<P, Q>,
    Parser<Q, R>,
    Parser<R, S>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S]>;
export function sequence<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
    Parser<P, Q>,
    Parser<Q, R>,
    Parser<R, S>,
    Parser<S, T>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T]>;
export function sequence<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
    Parser<P, Q>,
    Parser<Q, R>,
    Parser<R, S>,
    Parser<S, T>,
    Parser<T, U>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U]>;
export function sequence<
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
>(
  ...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>,
    Parser<K, L>,
    Parser<L, M>,
    Parser<M, N>,
    Parser<N, O>,
    Parser<O, P>,
    Parser<P, Q>,
    Parser<Q, R>,
    Parser<R, S>,
    Parser<S, T>,
    Parser<T, U>,
    Parser<U, V>,
  ]
): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V]>;
export function sequence(
  ...ps: Array<Parser<unknown, unknown>>
): Parser<unknown, unknown> {
  return new Parser(state => {
    if (state.type === 'err') return state;

    try {
      let {index} = state;
      const results = ps.reduce<unknown[]>((acc, p) => {
        const result = p.transformer(Ok(index, null, state.input));
        if (result.type === 'err') throw result;
        acc.push(result.value);
        index = result.index;
        return acc;
      }, []);
      return Ok(index, results, state.input);
    } catch (error) {
      return error as ParserState<unknown>;
    }
    // const results = [];
    // let {index} = state;

    // for (const p of ps) {
    //   const result = p.transformer(Ok(index, null, state.input));
    //   if (result.type === 'err') return result;
    //   index = result.index;
    //   results.push(result.value);
    // }

    // return Ok(index, results, state.input);
  });
}
