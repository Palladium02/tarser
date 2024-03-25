"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optional = void 0;
const parser_1 = require("./parser");
const state_1 = require("./state");
const optional = (p) => new parser_1.Parser(state => {
    if (state.type === 'err')
        return state;
    const result = p.transformer((0, state_1.Ok)(state.index, null, state.input));
    if (result.type === 'err')
        return (0, state_1.Ok)(state.index, null, state.input);
    return result;
});
exports.optional = optional;
//# sourceMappingURL=optional.js.map