"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.many1 = void 0;
const parser_1 = require("./parser");
const state_1 = require("./state");
const many1 = (p) => new parser_1.Parser(state => {
    if (state.type === 'err')
        return state;
    const results = [];
    let { index } = state;
    while (true) {
        const result = p.transformer((0, state_1.Ok)(index, null, state.input));
        if (result.type === 'err')
            break;
        index = result.index;
        results.push(result.value);
    }
    if (results.length === 0)
        return (0, state_1.Err)(index, 'no matches', state.input);
    return (0, state_1.Ok)(index, results, state.input);
});
exports.many1 = many1;
//# sourceMappingURL=many1.js.map