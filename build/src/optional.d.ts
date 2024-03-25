import { Parser } from './parser';
export declare const optional: <T, U>(p: Parser<T, U>) => Parser<T, U | null>;
