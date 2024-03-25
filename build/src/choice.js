"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choice = void 0;
const parser_1 = require("./parser");
const state_1 = require("./state");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const choice = (...ps) => {
    if (ps.length === 0)
        throw new Error('No parsers provided');
    // @ts-expect-error - We know that the return type is correct fix later
    return new parser_1.Parser(state => {
        if (state.type === 'err')
            return state;
        for (const p of ps) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const result = p.transformer((0, state_1.Ok)(state.index, null, state.input));
            if (result.type === 'ok')
                return result;
        }
        return (0, state_1.Err)(state.index, 'All parsers failed to match input', state.input);
    });
};
exports.choice = choice;
//# sourceMappingURL=choice.js.map