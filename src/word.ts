import {char} from './char';
import {Parser} from './parser';
import {sequence} from './sequence';

export const word = <T, W extends string>(w: W): Parser<T, Word<W>> => {
  // @ts-expect-error - Due to the static nature of sequence we need to ignore the error here we catch not typed cases above
  return sequence(...w.split('').map(c => char(c)));
};

type Word<T extends string> = T extends `${infer F}${infer R}`
  ? [F, ...Word<R>]
  : [];
