"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.char = void 0;
const parser_1 = require("./parser");
const state_1 = require("./state");
const char = (c) => {
    if (c.length !== 1)
        throw new Error('char() must be called with a single character');
    return new parser_1.Parser(state => {
        if (state.type === 'err')
            return state;
        const { index, input } = state;
        const toInspect = input[index];
        if (!toInspect)
            return (0, state_1.Err)(index, `Expected ${c} but got EOF`, input);
        return toInspect === c
            ? (0, state_1.Ok)(index + 1, c, input)
            : (0, state_1.Err)(index, `Expected ${c} but got ${toInspect}`, input);
    });
};
exports.char = char;
//# sourceMappingURL=char.js.map