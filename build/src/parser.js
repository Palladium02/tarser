"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = exports.createState = void 0;
function createState(input) {
    return { type: 'ok', index: 0, value: null, input };
}
exports.createState = createState;
class Parser {
    constructor(transformer) {
        this.transformer = transformer;
    }
    run(input) {
        const state = createState(input);
        return this.transformer(state);
    }
    map(fn) {
        return new Parser(state => {
            const nextState = this.transformer(state);
            if (nextState.type === 'ok') {
                return { ...nextState, value: fn(nextState.value) };
            }
            return nextState;
        });
    }
}
exports.Parser = Parser;
//# sourceMappingURL=parser.js.map