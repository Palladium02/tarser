"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy = void 0;
const parser_1 = require("./parser");
const state_1 = require("./state");
const lazy = (fn) => new parser_1.Parser(state => {
    const parser = fn();
    return parser.transformer((0, state_1.Ok)(state.index, null, state.input));
});
exports.lazy = lazy;
//# sourceMappingURL=lazy.js.map