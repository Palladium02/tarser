import { Parser } from './parser';
export declare const choice: <Ps extends Parser<any, any>[]>(...ps: Ps) => Parser<Heads<Ps>, Tails<Ps>>;
type Heads<Ps> = Ps extends [] ? never : Ps extends [Parser<infer A, infer _B>, ...infer R] ? A | Heads<R> : never;
type Tails<Ps> = Ps extends [] ? never : Ps extends [Parser<infer _A, infer B>, ...infer R] ? B | Tails<R> : never;
export {};
