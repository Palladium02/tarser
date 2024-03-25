"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.word = void 0;
const char_1 = require("./char");
const sequence_1 = require("./sequence");
const word = (w) => {
    // @ts-expect-error - Due to the static nature of sequence we need to ignore the error here we catch not typed cases above
    return (0, sequence_1.sequence)(...w.split('').map(c => (0, char_1.char)(c)));
};
exports.word = word;
//# sourceMappingURL=word.js.map