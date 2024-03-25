"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Converter = exports.float = exports.digit = exports.letter = exports.whitespace = void 0;
const char_1 = require("./char");
const choice_1 = require("./choice");
const many1_1 = require("./many1");
const optional_1 = require("./optional");
const parser_1 = require("./parser");
const sequence_1 = require("./sequence");
const state_1 = require("./state");
exports.whitespace = new parser_1.Parser(state => {
    if (state.type === 'err')
        return state;
    const { index, input } = state;
    const toInspect = input[index];
    if (!toInspect)
        return (0, state_1.Err)(index, 'Expected whitespace but got EOF', input);
    return /\s/.test(toInspect)
        ? (0, state_1.Ok)(index + 1, toInspect, input)
        : (0, state_1.Err)(index, `Expected whitespace but got ${toInspect}`, input);
});
exports.letter = new parser_1.Parser(state => {
    if (state.type === 'err')
        return state;
    const { index, input } = state;
    const toInspect = input[index];
    if (!toInspect)
        return (0, state_1.Err)(index, 'Expected letter but got EOF', input);
    return /[a-zA-Z]/.test(toInspect)
        ? (0, state_1.Ok)(index + 1, toInspect, input)
        : (0, state_1.Err)(index, `Expected letter but got ${toInspect}`, input);
});
exports.digit = (0, choice_1.choice)((0, char_1.char)('0'), (0, char_1.char)('1'), (0, char_1.char)('2'), (0, char_1.char)('3'), (0, char_1.char)('4'), (0, char_1.char)('5'), (0, char_1.char)('6'), (0, char_1.char)('7'), (0, char_1.char)('8'), (0, char_1.char)('9'));
const digitToNumber = (digit) => Number(digit);
exports.float = (0, sequence_1.sequence)((0, optional_1.optional)((0, char_1.char)('-')), (0, many1_1.many1)(exports.digit), (0, optional_1.optional)((0, sequence_1.sequence)((0, char_1.char)('.'), (0, many1_1.many1)(exports.digit))));
const floatToNumber = (parts) => {
    if (!parts)
        throw new Error('This should not have happened');
    const [sign, integer, decimal] = parts;
    const integerPart = integer.join('');
    const decimalPart = decimal ? decimal[1].join('') : '';
    const number = Number(`${sign !== null && sign !== void 0 ? sign : ''}${integerPart}.${decimalPart}`);
    return number;
};
exports.Converter = {
    forFloat: floatToNumber,
    forDigit: digitToNumber,
};
//# sourceMappingURL=utils.js.map