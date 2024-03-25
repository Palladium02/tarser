import { Parser } from './parser';
export declare function sequence<A, B>(...ps: [Parser<A, B>]): Parser<A, [B]>;
export declare function sequence<A, B, C>(...ps: [Parser<A, B>, Parser<B, C>]): Parser<A, [B, C]>;
export declare function sequence<A, B, C, D>(...ps: [Parser<A, B>, Parser<B, C>, Parser<C, D>]): Parser<A, [B, C, D]>;
export declare function sequence<A, B, C, D, E>(...ps: [Parser<A, B>, Parser<B, C>, Parser<C, D>, Parser<D, E>]): Parser<A, [B, C, D, E]>;
export declare function sequence<A, B, C, D, E, F>(...ps: [Parser<A, B>, Parser<B, C>, Parser<C, D>, Parser<D, E>, Parser<E, F>]): Parser<A, [B, C, D, E, F]>;
export declare function sequence<A, B, C, D, E, F, G>(...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>
]): Parser<A, [B, C, D, E, F, G]>;
export declare function sequence<A, B, C, D, E, F, G, H>(...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>
]): Parser<A, [B, C, D, E, F, G, H]>;
export declare function sequence<A, B, C, D, E, F, G, H, I>(...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>
]): Parser<A, [B, C, D, E, F, G, H, I]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J>(...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>
]): Parser<A, [B, C, D, E, F, G, H, I, J]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K>(...ps: [
    Parser<A, B>,
    Parser<B, C>,
    Parser<C, D>,
    Parser<D, E>,
    Parser<E, F>,
    Parser<F, G>,
    Parser<G, H>,
    Parser<H, I>,
    Parser<I, J>,
    Parser<J, K>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L>(...ps: [
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
    Parser<K, L>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M>(...ps: [
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
    Parser<L, M>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(...ps: [
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
    Parser<M, N>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(...ps: [
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
    Parser<N, O>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(...ps: [
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
    Parser<O, P>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(...ps: [
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
    Parser<P, Q>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(...ps: [
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
    Parser<Q, R>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(...ps: [
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
    Parser<R, S>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(...ps: [
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
    Parser<S, T>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U>(...ps: [
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
    Parser<T, U>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U]>;
export declare function sequence<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V>(...ps: [
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
    Parser<U, V>
]): Parser<A, [B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V]>;
