export type ParserState<T> = {
    type: 'ok';
    index: number;
    value: T | null;
    input: string;
} | {
    type: 'err';
    message: string;
    index: number;
    input: string;
};
export declare function Ok<T>(index: number, value: T, input: string): ParserState<T>;
export declare function Err(index: number, message: string, input: string): ParserState<never>;
