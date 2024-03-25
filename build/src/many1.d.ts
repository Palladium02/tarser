import { Parser } from './parser';
export declare const many1: <T, U>(p: Parser<T, U>) => Parser<T, [U, ...U[]]>;
