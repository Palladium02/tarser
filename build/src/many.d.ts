import { Parser } from './parser';
export declare const many: <T, U>(p: Parser<T, U>) => Parser<unknown, U[]>;
