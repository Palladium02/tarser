import { Parser } from './parser';
export type ParserIn<P> = P extends Parser<infer A, infer _B> ? A : never;
export type ParserOut<P> = P extends Parser<infer _A, infer B> ? B : never;
