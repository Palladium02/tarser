export type ParserState<T> =
  | {type: 'ok'; index: number; value: T | null; input: string}
  | {type: 'err'; message: string; index: number; input: string};

export function Ok<T>(index: number, value: T, input: string): ParserState<T> {
  return {type: 'ok', index, value, input};
}

export function Err(
  index: number,
  message: string,
  input: string
): ParserState<never> {
  return {type: 'err', index, message, input};
}
