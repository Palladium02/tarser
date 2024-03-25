import { Parser } from './parser';
export declare const whitespace: Parser<unknown, string>;
export declare const letter: Parser<unknown, string>;
export declare const digit: Parser<unknown, string>;
export declare const float: Parser<unknown, [string | null, [string, ...string[]], [string, [string, ...string[]]] | null]>;
export declare const Converter: {
    forFloat: (parts: [
        string | null,
        [
            string,
            ...string[]
        ],
        [
            string,
            [
                string,
                ...string[]
            ]
        ] | null
    ]) => number;
    forDigit: (digit: string) => number;
};
