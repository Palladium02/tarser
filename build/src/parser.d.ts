import { ParserState } from './state';
export type TransformerFn<T, U> = (state: ParserState<T>) => ParserState<U>;
export declare function createState<T>(input: string): ParserState<T>;
export declare class Parser<T, U> {
    transformer: TransformerFn<T, U>;
    constructor(transformer: TransformerFn<T, U>);
    run(input: string): ParserState<U>;
    map<V>(fn: (value: U) => V): Parser<T, V>;
}
