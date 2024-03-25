"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const src_1 = require("../src");
(0, node_test_1.test)('should parse numbers in scientific notation', () => {
    const digit = (0, src_1.choice)((0, src_1.char)('0'), (0, src_1.char)('1'), (0, src_1.char)('2'), (0, src_1.char)('3'), (0, src_1.char)('4'), (0, src_1.char)('5'), (0, src_1.char)('6'), (0, src_1.char)('7'), (0, src_1.char)('8'), (0, src_1.char)('9'));
    const float = (0, src_1.sequence)((0, src_1.optional)((0, src_1.char)('-')), (0, src_1.many1)(digit), (0, src_1.optional)((0, src_1.sequence)((0, src_1.char)('.'), (0, src_1.many1)(digit))));
    const int = (0, src_1.sequence)((0, src_1.optional)((0, src_1.char)('-')), (0, src_1.many1)(digit));
    const scientific = (0, src_1.sequence)(float, (0, src_1.char)('e'), int);
    const result = scientific.run('123.456e-789');
    // console.log(JSON.stringify(result, null, 2));
    node_assert_1.default.deepStrictEqual(result, {
        type: 'ok',
        index: 12,
        value: [
            [null, ['1', '2', '3'], ['.', ['4', '5', '6']]],
            'e',
            ['-', ['7', '8', '9']],
        ],
        input: '123.456e-789',
    });
});
//# sourceMappingURL=index.test.js.map