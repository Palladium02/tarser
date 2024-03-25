import { Parser } from './parser';
export declare const lazy: <T, U>(fn: () => Parser<T, U>) => Parser<T, U>;
