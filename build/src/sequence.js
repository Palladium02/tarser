"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequence = void 0;
const parser_1 = require("./parser");
const state_1 = require("./state");
function sequence(...ps) {
    return new parser_1.Parser(state => {
        if (state.type === 'err')
            return state;
        try {
            let { index } = state;
            const results = ps.reduce((acc, p) => {
                const result = p.transformer((0, state_1.Ok)(index, null, state.input));
                if (result.type === 'err')
                    throw result;
                acc.push(result.value);
                index = result.index;
                return acc;
            }, []);
            return (0, state_1.Ok)(index, results, state.input);
        }
        catch (error) {
            return error;
        }
        // const results = [];
        // let {index} = state;
        // for (const p of ps) {
        //   const result = p.transformer(Ok(index, null, state.input));
        //   if (result.type === 'err') return result;
        //   index = result.index;
        //   results.push(result.value);
        // }
        // return Ok(index, results, state.input);
    });
}
exports.sequence = sequence;
//# sourceMappingURL=sequence.js.map