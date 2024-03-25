import { Parser } from './parser';
export declare const word: <T, W extends string>(w: W) => Parser<T, Word<W>>;
type Word<T extends string> = T extends `${infer F}${infer R}` ? [F, ...Word<R>] : [];
export {};
