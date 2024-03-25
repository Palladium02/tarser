"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const src_1 = require("../src");
(0, node_test_1.test)('should parse a sequence of characters', () => {
    const parser = (0, src_1.sequence)((0, src_1.char)('a'), (0, src_1.char)('b'), (0, src_1.char)('c'));
    const result = parser.run('abc');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'ok',
        index: 3,
        value: ['a', 'b', 'c'],
        input: 'abc',
    });
});
(0, node_test_1.test)('should fail if the first character is not present', () => {
    const parser = (0, src_1.sequence)((0, src_1.char)('a'), (0, src_1.char)('b'), (0, src_1.char)('c'));
    const result = parser.run('bbc');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'err',
        index: 0,
        message: 'Expected a but got b',
        input: 'bbc',
    });
});
(0, node_test_1.test)('should fail if the second character is not present', () => {
    const parser = (0, src_1.sequence)((0, src_1.char)('a'), (0, src_1.char)('b'), (0, src_1.char)('c'));
    const result = parser.run('aac');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'err',
        index: 1,
        message: 'Expected b but got a',
        input: 'aac',
    });
});
(0, node_test_1.test)('should fail if the input is empty', () => {
    const parser = (0, src_1.sequence)((0, src_1.char)('a'), (0, src_1.char)('b'), (0, src_1.char)('c'));
    const result = parser.run('');
    node_assert_1.default.deepStrictEqual(result, {
        type: 'err',
        index: 0,
        message: 'Expected a but got EOF',
        input: '',
    });
});
//# sourceMappingURL=sequence.test.js.map